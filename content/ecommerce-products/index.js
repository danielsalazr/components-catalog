

async function getProducts(){

    const req = await fetch('https://fakestoreapi.com/products/');
    const res = await req.json();

    if (req.status != 200){
        console.log('Error');
        // console.log(res);
        
        return
    }

    console.log(res);

    res.map(item => {
        console.log(item)
    })
}

document.addEventListener('DOMContentLoaded', async () => {
    await getProducts();
})