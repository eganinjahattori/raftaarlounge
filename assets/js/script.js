async function handleContactSubmit() {
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
    if (name != undefined && email != undefined && subject != undefined && message != undefined) {
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
    }
}