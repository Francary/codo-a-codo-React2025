import "../styles/gallery.css"
const Gallery = () => {  
    const images = [  
        "https://cdn.pixabay.com/photo/2024/07/25/23/56/interior-design-8922413_960_720.jpg",  
        "https://cdn.pixabay.com/photo/2024/05/22/22/33/interior-design-8781907_960_720.png",  
        "https://media.istockphoto.com/id/1486972243/photo/couple-e-sport-gamer-playing-and-helping-clear-stage-challenge-with-happy-enjoy-feeling.webp?s=2048x2048&w=is&k=20&c=oxUSQKsr1lIcGd3RcGyW14EKUutdmLSmER6aUfQpKuI="  
    ];  


    return (  
        <section >  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`}  />  
            ))}  
        </section>  
    );  
}  


export 
{

    Gallery 
} 
