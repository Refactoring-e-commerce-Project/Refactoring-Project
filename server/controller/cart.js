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
      const {userId, productId, quantity,totalPrice }= req.body
      
    
      const newcart= await Cart.create({
        
          userId,
          productId,
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

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

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
  }
}





module.exports={getAllcart,deleteCart,updateCart,addToCart,getOneCart}