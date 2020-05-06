var React = require("react");

function Footer(){
    var dt = new Date();
    var year = dt.getFullYear();
    console.log(year);
    
    return <footer><p>Copyright@{year}</p></footer>;
}

export default Footer;