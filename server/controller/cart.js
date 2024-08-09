const { Cart }= require("../database/index")



 const getAllcart= async (req, res)=>{
  try {
    const items = await Cart.findAll()
    res.json(items)
}
catch (error) {
    console.error(error)
    res.status(500).send ("error fetching the product")
}
}


const addToCart = async (req, res)=>{
  try {
<<<<<<< HEAD
      const {userId, productId, quantity,totalPrice }= req.body
=======
      const {userId, productId,image,price, quantity,totalPrice }= req.body
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
      
    
      const newcart= await Cart.create({
        
          userId,
          productId,
<<<<<<< HEAD
=======
          image,
          price,
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
          quantity,
          totalPrice
  
      })

      res.status(200).json(newcart)
  }

  catch (error) {
      console.error(error)
      res.status(500).send("error in adding the item")
  }
}

const updateCart = async (req, res) => {
  const { id } = req.params
  const { quantity,totalPrice } = req.body

  try {
    const [updated] = await Cart.update(
      { quantity,totalPrice },
      { where: { id } }
    )
      res.status(200).send(" item updated successfully")
   
  } 
  catch (error) {
    console.error(error);
    res.status(500).send("error updating the product")
  }
}

const deleteCart = async (req, res) => {
  const id = req.params.id

  try {
      const deleted = Cart.destroy({ where : {id : id}})
      res.status(200).send(" item deleted successfully")
  }
  catch (error) {
      console.error(error)
      res.status(500).send("error deleting the product")
  }
}

const getOneCart = async (req, res) => {
  try {
<<<<<<< HEAD
    const id = req.params.id

 
    const cart = await Cart.findOne({
      where: { userId },
      include: {
        model: Cart,
        include: {
          model: Product,
        },
      },
    })

=======
    // Retrieve the userId from the request parameters
    const { id } = req.params;
    
    // Ensure id is valid
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find the cart associated with the userId
    const cart = await Cart.findAll({
      where: { userId: id }
    });

    // Check if the cart exists
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

<<<<<<< HEAD
    const cartItems = cart.cartitems || []

  
    const response = cartItems.map(cartItem => ({
      id: cartItem.id,
      userId:cartItem.userId,
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      totalPrice: cartItem.totalPrice, 

    }));

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching cart items:", error)
    res.status(500).json({ error: "Error fetching cart items" })
=======
    
    res.status(200).json(cart);
  } catch (error) {
    // Log the error and send a 500 status code
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Error fetching cart items" });
  }
}
const getOneCartByProdId = async (req, res) => {
  try {
    // Retrieve the userId from the request parameters
    const { id } = req.params;
    
    // Ensure id is valid
    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Find the cart associated with the userId
    const cart = await Cart.findAll({
      where: { productId: id }
    });

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    
    res.status(200).json(cart);
  } catch (error) {
    // Log the error and send a 500 status code
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Error fetching cart items" });
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
  }
}



<<<<<<< HEAD


module.exports={getAllcart,deleteCart,updateCart,addToCart,getOneCart}
=======
module.exports={getAllcart,deleteCart,updateCart,addToCart,getOneCart,getOneCartByProdId}
>>>>>>> 811a2262568a6338e3699fc7d6be891ed62235d2
