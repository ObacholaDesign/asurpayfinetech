
function goBack() {
    window.history.back();
}

function openPopup() {
    document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    
}
function closePaymentPopup() {
    document.getElementById("payment-overlay").style.display = "none";
    
}


function openPaymentPopup() {
    // Ajoutez ici la logique pour afficher le popup de paiement
    closePopup(overlay);
    document.getElementById("payment-overlay").style.display = "flex";
}




document.getElementById('editBtn').addEventListener('click', function() {
    const form = document.getElementById('profil-form');
    const inputs = form.querySelectorAll('input');
    const submitBtn = document.getElementById('submitBtn');

    inputs.forEach(input => {
        input.disabled = false;
        input.required = true;
    });

    submitBtn.classList.remove('disabled');
    submitBtn.classList.add('custom-button');
});
