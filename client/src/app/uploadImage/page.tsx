'use client'
import { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import './uploadimage.css'
import axios from 'axios';

const Seller = () => {
  const [images, setImages] = useState(undefined);
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0) ;
  const [categories, setCategories] = useState<any[]>([]);

  /////////////////////////////
  const convertBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64:any) {
    axios
      .post("http://localhost:3000/uploadImage", { image: base64 })
      .then((res) => {
        setImages(res.data);
        console.log(res.data);
        console.log("Image uploaded Succesfully");
      })
      .catch(console.log);
  }
  

  function uploadMultipleImages(images:any) {
    axios
      .post("http://localhost:3000/uploadMultipleImages", { images })
      .then((res) => {
        setImages(res.data[0]);
        console.log('cloud',res.data[0]);
        console.log("Image uploaded Succesfully");
              })
        .catch(console.log);
  }

  const uploadImage = async (event:any) => {
    const files = event.target.files; 
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (var i = 0; i < files.length; i++) {
      var base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  ///////////////////////////

  const fetchCategories=async()=>{
    try{
    const response=await axios.get('http://localhost:3000/categories/getcat')
     await setCategories(response.data.categories)
  }
  catch(err){
    console.log(err)
  }
}


useEffect(()=>{
  fetchCategories()
},[])
// console.log(categories)



useEffect(() => {
  const storetoken = localStorage.getItem('token')
  console.log('ccccc',storetoken)
  if (storetoken) {
    const decodedToken = jwtDecode(storetoken) as { id: number }
    console.log(decodedToken)
    
    if (decodedToken && decodedToken.id) {
      setUserId(decodedToken.id)
      // Optionally, you can fetch the user's products here
      getProductsbyUserId(decodedToken.id)
    } else {
      console.error('Invalid token: User ID not found')
      
    }
  } else {
    console.error('No token found')

  }
}, [])



const getProductsbyUserId = async (id: number) => {
  try {
    const response = await axios.get(`http://localhost:3000/products/user/${id}`);
    console.log(response.data);
 
  } catch (error) {
    console.error('Error fetching user products:', error);
    
  }
};

const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedId = Number(e.target.value);
  setCategoryId(selectedId);
};

const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (!productName.trim() || !description.trim() || price <= 0 || !categoryId) {
    alert("Please fill in all fields correctly");
    return;
  }
  
  try {
    const response = await axios.post('http://localhost:3000/products/add', {
      productname:productName,
      description,
      price,
      categoryId,
      userId:Number(2),
      images
    });

    console.log('Product added:', response.data);
    
    // Show success message
    alert("Product added successfully!");
    
    // Clear the form
    setProductName("");
    setDescription("");
    setPrice(0);
    setCategoryId(0);
    setImages(undefined); // Clear images as well

    // Optionally, you could refresh the product list here
    // await getProductsbyUserId(userId);
  } catch (error) {
    console.error('Error adding product:', error);
    if (axios.isAxiosError(error) && error.response) {
      // More specific error message based on server response 
      alert(`Failed to add product: ${error.response.data.message || 'Please try again.'}`);
    } else {
      alert("Failed to add product. Please try again.")
    }
  }
};




  
  
 
  
   
  
  
  


  return (
    <div className="global__container__seller">
      <div className="header__seller__page">
        <div className="title__seller__page">
          <div className="red_mark__seller"></div>
          <span className="space__seller">Seller Space</span>
        </div>
        
      </div>
      <div className="seller__page__container">
        <h3 className="add__product__text">You Can Add Your Product Here</h3>
        <input
          type="text"
          placeholder="Product Name"
         onChange={(e)=>setProductName(e.target.value)}
         
        />
        <div className="cloudinary">
          <input style={{display:"none"}} type="file" multiple id='file' onChange={uploadImage}/>
          <label htmlFor="file"style={{fontSize:"16px",fontWeight:"600"}}
          
          >Add your photo</label>
        </div>
        
      
        <input
          className="seller__input"
          type="text"
          placeholder="Product description"
        onChange={(e)=>setDescription(e.target.value)}

         
        />
        <input
          type="number"
          placeholder="Product price"
          onChange={(e)=>setPrice(Number(e.target.value))}
       
        />
        <form onSubmit={addProduct}>
          <div>
            <label htmlFor="categories" style={{fontSize:"16px",fontWeight:"600"}}>Choose a category:</label>
            <select 
              name="categories" 
              id="categories"
              value={categoryId}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>

          <button  type="submit"  className="btn__add__product__seller" >
            Click to add
          </button>
        </form>
      </div>
      
    </div>
  );
};

export default Seller