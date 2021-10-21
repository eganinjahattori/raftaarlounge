fetch('https://raftaarlounge.herokuapp.com/');

async function handleContactSubmit() {
    console.log("Handle Contact Submit Form");
    const name = document.getElementById("name2").value;
    const email = document.getElementById("email2").value;
    const subject = document.getElementById("subject2").value;
    const message = document.getElementById("message2").value;
    const obj = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    if (name != undefined && email != undefined && subject != undefined && message != undefined
        && name != '' && email != '' && subject != '' && message != ''
        ) {
        console.log(name, email, subject, message);
        const response = await fetch('https://raftaarlounge.herokuapp.com/contact',
            {
                method: 'POST',
                body: JSON.stringify(obj),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        console.log(response);
        if(response.status == 200)
            document.getElementById("sent-message2").style.display = "block";
    }
}

async function handleBookSubmit() {
    console.log("Handle Booking Submit Form");
    const name = document.getElementById("name1").value;
    const email = document.getElementById("email1").value;
    const phone = document.getElementById("phone1").value;
    const date = document.getElementById("date1").value;
    const time = document.getElementById("time1").value;
    const people = document.getElementById("people1").value;
    const message = document.getElementById("message1").value;
    const obj = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        time: time,
        people: people,
        message: message
    };
    if (name != undefined && email != undefined && phone != undefined && message != undefined
        && date != undefined && time != undefined && people != undefined
        && name != '' && email != '' && phone != '' && message != ''
        && date != '' && time != '' && people != ''
    ) {
        console.log(name, email, phone, message);
        const response = await fetch('https://raftaarlounge.herokuapp.com/bookTable',
            {
                method: 'POST',
                body: JSON.stringify(obj),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            document.getElementById("sent-message1").style.display = "block";
        console.log(response);
    }
}