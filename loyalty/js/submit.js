async function handleSubmit () {
    const name = document.getElementById('name_input').value
    var phone = document.getElementById('phone_input').value
    if (name != undefined && name != '' && phone != undefined && phone != '') {
      if (phone.length == 10) {
        const body = {
          name: name,
          phone: phone
        }
        const response = await fetch(
          // 'http://localhost:7070/loyalty/new',
          'http://18.217.196.171:7070/loyalty/new',
          {
            method: 'POST',
            body: JSON.stringify(body),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        console.log(response)
        if (response.status == 200) {
          window.alert('Submitted')
          document.getElementById('name_input').value = null
          document.getElementById('phone_input').value = null
        } else window.alert(response.message)
      } else {
        window.alert('Phone Number has to be 10 digits')
      }
    }
    else  window.alert("Please enter the required details.")
  }
  