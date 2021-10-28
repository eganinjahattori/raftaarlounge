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
        if (response.status == 200)
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

    // console.log(people.split('/'))

    if (people != undefined && people != '') {
        if (people.split('/').length != 2 && people.split('/')[0].length == 0 && people.split('/')[1].length == 0) {
            window.alert("Please enter the male/female ratio.");
            return;
        }
    }

    if (name != undefined && email != undefined && phone != undefined && message != undefined
        && date != undefined && time != undefined && people != undefined
        && name != '' && email != '' && phone != '' && message != ''
        && date != '' && time != '' && people != '' && people.split('/').length == 2 &&
        people.split('/')[0].length > 0 && people.split('/')[1].length > 0
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
    else {
        window.alert("Error: Please fill all the details!");
    }
}

async function handleLogin() {
    const username = document.getElementById("username1").value;
    const password = document.getElementById("password1").value;
    if (username == undefined || username == '' || password == undefined || password == '') {
        window.alert("Username/Password cannot be empty.");
    }
    else {
        const body = { username: username, password: password };
        // const response = await fetch('https://raftaarlounge.herokuapp.com/login',
        const response = await fetch('http://localhost:4040/login',
            {
                method: 'POST',
                body: JSON.stringify(body),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        console.log(response);
        if (response.status == 200)
        {
            window.localStorage.setItem("auth","success");
            window.location.replace('/events.html');
        }
        else
            window.alert("Invalid Credentials. Please try again.")
    }
    console.log(username, password);
}