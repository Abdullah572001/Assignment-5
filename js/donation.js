



const quotaDonation = getInnerText('quota-donation');
const quotaDonationAmount = getInputValue('quota-donation-amount');

// Noakhali Donation Funtion
document.getElementById('donate-now-btn1')
    .addEventListener('click', function () {
        const targetBalance = getInnerText('target-balance');

        const noakhaliDonation = getInnerText('noakhali-donation');
        const noakhaliDonationAmount = getInputValue('noakhali-donation-amount');

        if (noakhaliDonationAmount <= 0) {
            alert('Invalid Donation Amount');
            return;
        }

        if (noakhaliDonationAmount > targetBalance) {
            alert('You do not have enough money');
            return;
        }

        const noakhaliAdd = noakhaliDonation + noakhaliDonationAmount;
        document.getElementById('noakhali-donation').innerText = noakhaliAdd;

        const targetMinus = targetBalance - noakhaliDonationAmount;
        document.getElementById('target-balance').innerText = targetMinus;

        const div = document.createElement('div');
        div.classList.add('history');
        // div.classList.add('border');
        // div.classList.add('rounded-2xl');
        div.classList.add('p-6');
        div.classList.add('mb-10');
        div.id = 'history-div';
        document.getElementById('history').appendChild(div);

        const p = document.createElement('p');
        p.innerText = `
        ${noakhaliDonationAmount} Taka is Donate for Flood at Noakhali, Bangladesh
        `;
        p.classList.add('text-2xl');
        p.classList.add('font-bold');
        document.getElementById('history-div').appendChild(p);


        // time
        const time = new Date().toLocaleString("en-US", { timeZone: 'Asia/Dhaka', timeStyle: 'full' });
        // date
        const date = new Date().toDateString();

        const pp = document.createElement('p');
        pp.innerText = `
        Date : ${date}  ${time}
        `
        document.getElementById('history-div').appendChild(pp);


        my_modal_5.showModal();
    })

// Feni Donation Funtion
document.getElementById('donate-now-btn2')
    .addEventListener('click', function () {
        const targetBalance = getInnerText('target-balance');

        const feniDonation = getInnerText('feni-donation');
        const feniDonationAmount = getInputValue('feni-donation-amount');

        if (feniDonationAmount > targetBalance) {
            alert('You do not have enough money');
            return;
        }
        if (feniDonationAmount <= 0) {
            alert('Invalid Donation Amount');
            return;
        }

        const feniAdd = feniDonation + feniDonationAmount;
        document.getElementById('feni-donation').innerText = feniAdd;

        const targetMinus = targetBalance - feniDonationAmount;
        document.getElementById('target-balance').innerText = targetMinus;

        

        my_modal_5.showModal();
    })