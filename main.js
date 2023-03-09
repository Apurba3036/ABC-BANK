document.getElementById('depositbutton').addEventListener('click', function () {


    const depositamount = document.getElementById('deposit')
    const newdepoamountstr = depositamount.value

    const newdepoamount = parseFloat(newdepoamountstr);

    // console.log(amount)


    const deposittotalamount = document.getElementById('deposit-total')
    const predepoamountstr = deposittotalamount.innerText;
    // console.log(deposittotal)
    // deposittotalamount.innerText= amount;

    const predepoamount = parseFloat(predepoamountstr);

    const currentdepo = predepoamount + newdepoamount;

    deposittotalamount.innerText = currentdepo;

    // balance 


    const balancetotalamount = document.getElementById("balance-total");
    const prebalancetotalstr = balancetotalamount.innerText;
    const prebalancetotal = parseFloat(prebalancetotalstr);


    //calculate current total balance

    const currnetbalance = prebalancetotal + newdepoamount;

    balancetotalamount.innerText = currnetbalance;





    depositamount.value = "";

})


document.getElementById('withdrawbutton').addEventListener('click', function () {


    const withdrawamount = document.getElementById('withdraw')
    const withdrawamountstr = withdrawamount.value;
    const newwithdrawamount = parseFloat(withdrawamountstr);
    console.log(newwithdrawamount);

    const withdrawtotalamount = document.getElementById('withdrawtotal');
    const withdrawstr = withdrawtotalamount.innerText;
    const prewithdraw = parseFloat(withdrawstr);
    console.log(prewithdraw);




    const currentwithdraw = newwithdrawamount + prewithdraw;


    withdrawtotalamount.innerText = currentwithdraw;


    // balance 


    const balancetotalamount = document.getElementById("balance-total");
    const prebalancetotalstr = balancetotalamount.innerText;
    const prebalancetotal = parseFloat(prebalancetotalstr);


    //calculate current total balance

    const currnetbalance = prebalancetotal - newwithdrawamount;

    balancetotalamount.innerText = currnetbalance;


    withdrawamount.value = "";
})

