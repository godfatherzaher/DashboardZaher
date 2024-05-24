
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleproduct.module.css"
import Image from "next/image";


const SingleProductPage = async ({params}) =>{
    const {id} = params;
    const product = await fetchProduct(id)

    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image  src={ product.img || "/noavatar.png"} alt="" fill  />
                </div>
            {product.title}
            </div>
            <div className={styles.formContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden"  name="id" value={product.id}/>

                    <label>Title</label>
                    <input type="text" placeholder={product.title} name="title"/>

                    <label>Price</label>
                    <input type="number" placeholder={product.price} name="price"/>
                   
                    <label>Stock</label>
                    <input type="number" placeholder={product.stock}  name="stock"/>
                   
                    <label>Color</label>
                    <input type="text" placeholder={product.colot || "color"} name="color"/>
                    
                    <label>Size</label>
                    <textarea type="text" name="size" placeholder={product.size || "size"}/>
                    <label>Cat</label>
                    <select name="cat" id="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="Computers">Computers</option>
                    </select>
                    <label>Description</label>
                   <textarea
                     name="desc"
                     id="desc" 
                     rows="10" 
                     placeholder={product.desc}>
                        
                     </textarea>
                    <button>Update</button>
                </form>

            </div>
        </div>
    )
}

export default SingleProductPage;