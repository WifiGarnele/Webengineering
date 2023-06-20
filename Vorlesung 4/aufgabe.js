// Funktion zum Abrufen eines Produkts anhand der ID
async function getALL(){
    fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(console.log);
            
}




async function getProductById(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    console.log(data);
  }
  
  // Funktion zum Hinzufügen eines Produkts
  async function addProduct() {
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'BMW Pencil',
        /* other product data */
      })
    });
    const data = await response.json();
    console.log(data);
  }
  
  // Funktion zum Aktualisieren eines Produkts anhand der ID
  async function updateProduct() {
    const response = await fetch('https://dummyjson.com/products/1', {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'iPhone Galaxy +1'
      })
    });
    const data = await response.json();
    console.log(data);
  }
  
  async function deleteProduct() {
    const response = await fetch('https://dummyjson.com/products/1', {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
  }
  
  // Buttons in der UI, um die Funktionen auszulösen
  const getButton = document.getElementById('getButton');
  const postButton = document.getElementById('postButton');
  const putButton = document.getElementById('putButton');
  const patchButton = document.getElementById('patchButton');
  const deleteButton = document.getElementById('deleteButton');
  
  getButton.addEventListener('click', () => {
    getProductById(1); // Beispiel-ID, du kannst die ID hier anpassen
  });
  
  addButton.addEventListener('click', () => {
    addProduct();
  });
  
  updateButton.addEventListener('click', () => {
    updateProduct();
  });
  
  getallButton.addEventListener('click', () => {
    getALL();
  });
  
  deleteButton.addEventListener('click', () => {
    deleteProduct();
  });