function generateQR() {

    const name = document.getElementById("name").value.trim();
    const parent = document.getElementById("parent").value.trim();
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (name === "" || parent === "" || age === "" || phone === "" || address === "") {
        alert("Please fill all fields");
        return;
    }
    const data = `Name: ${name}
                  Parent: ${parent}
                  Age: ${age}
                  Phone: ${phone}
                  Address: ${address}`;

          document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: data,
        width: 220,
        height: 220
    });
}