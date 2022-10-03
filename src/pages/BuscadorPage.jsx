import "../styles/buscador.css";
const buscadorPage = () => {
    return (
    <body class="bo">
    <header class="head">
     <input type="search" id="input-search" placeholder="Buscar aqui"/>
     
     <div class="content-search">
         <div class="content-table">
             <table id="table">
                 <thead>
                     <tr class="i">
                         <td class="i"></td>
                     </tr>
                 </thead>
                 
                 <tbody class="i">
                     <tr class="i">
                         <td class="i"><a class="i" href="#">Mouse</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/cajacpu.jpg">BOX CPU</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/tarjetagrafica.jpg">GTX 3000</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/tarjetagrafica.jpg">GTX 1650</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/pantalla.jpg">Pantalla PC</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="#">intelCore i3</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/corei5.jpg">intel Core i5</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="#">intel Core i7</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/memoriaram.jpg">memoria ram</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/SSD.JPG">disco SSD</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i" href="img/HDD.JPG">disco HDD</a></td>
                     </tr>
                     
                     <tr class="i">
                         <td class="i"><a class="i"  href="img/ventilador.jpg">ventilador</a></td>
                     </tr>
                     
                 </tbody>
             </table>
         </div>
     </div>
 </header>
 
 <script src="../js/search.js"></script>
 <script src="../js/jquery.js"></script>
 <script src="../js/jquery.dataTables.min.js"></script>
 </body> 
 ) ;
 } ;
 export default buscadorPage;
