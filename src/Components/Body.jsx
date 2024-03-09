import "./Body.css"
import Product from "./Product"

export default function Body(){
    return <>
    <body>
        <img src=".src/Pics/main_img-removebg-preview.png" className="main-img" />
        <section className="main-paragraph">
            <h3>Aqua-Charbon</h3>
            <p>Aqua-Charbon, where innovation meets purity. Dive into a world where water filtration isn't just a neccesity, it's a transformative experience. <br /> <br />
            With our cutting-edge technology, we don't just filter water; we elevate it to its purest essence, ensuring every drop you drink is a crisp and refreshing as nature intended. <br /> <br />
            Join us as we embark on a journey to redefine clean water standards, one sip at a time. </p>
            <h3>Our products :</h3>
            <Product/>
        </section>
    </body>
    </>
}
