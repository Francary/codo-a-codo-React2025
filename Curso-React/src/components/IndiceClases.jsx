import { Link } from "react-router-dom";

const IndiceClases = () => {
  return (
    <>
        <Link to="/clase01"><button>Clase01</button></Link>
        <Link to="/clase02"><button>Clase02</button></Link>
        <Link to="/clase03"><button>Clase03</button></Link>
        <Link to="/clase04"><button>Clase04</button></Link>
        <Link to="/clase06"><button>Clase06</button></Link>
        <Link to="/clase05"><button>Clase05</button></Link>
    </>
  );
};

export {
    IndiceClases
}