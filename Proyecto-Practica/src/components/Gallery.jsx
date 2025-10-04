const Gallery = () => {  
    const images = [  
        "https://cdn.pixabay.com/photo/2024/07/25/23/56/interior-design-8922413_960_720.jpg",  
        "https://cdn.pixabay.com/photo/2024/05/22/22/33/interior-design-8781907_960_720.png",  
        "https://media.istockphoto.com/id/1486972243/photo/couple-e-sport-gamer-playing-and-helping-clear-stage-challenge-with-happy-enjoy-feeling.webp?s=2048x2048&w=is&k=20&c=oxUSQKsr1lIcGd3RcGyW14EKUutdmLSmER6aUfQpKuI="  
    ];  


    return (  
        <section style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>  
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`Imagen ${index + 1}`} style={{ width: "400px", height: "400px" }} />  
            ))}  
        </section>  
    );  
}  


export 
{

    Gallery 
} 
