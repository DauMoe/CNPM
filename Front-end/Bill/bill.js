//Animation and calcu cash
let dropdown = document.getElementsByClassName("dropdown-btn");
let productResult = $("#productResult");
let searchProduct = $("#searchProduct");
let customerResult = $("#customerResult");
let searchCustomer = $("#searchCustomer");
let billCash = $("#bill-cash");
let cashBack = $("#cashBack");
let cashMustPay = $("#cashMustPay").text().slice(0, $("#cashMustPay").text().length - 4)
let checkOut = $("#checkOut");

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

//Show result when focus
searchProduct.focus(() => {
    productResult.css("height", "200px");
});

searchProduct.focusout(() => {
    productResult.css("height", "0");
});

searchCustomer.focus(() => {
    customerResult.css("height", "200px");

});

searchCustomer.focusout(() => {
    customerResult.css("height", "0");
});

billCash.focusout(() => {
    let cash = billCash.val();
    if (Number(cash) > Number(cashMustPay)) {
        checkOut.removeAttr("disabled");
        cashBack.text(cash - cashMustPay + "VNĐ");
    } else {
        checkOut.attr('disabled', 'disabled');
        cashBack.text("0 VNĐ");
    }
})