ZOHO.embeddedApp.on("PageLoad",function () {
    // Function to create a lead
    function createLead() {
        var firstName = document.getElementById('fnamein').value;
        var lastName = document.getElementById('lnamein').value;
        var company = document.getElementById('compin').value;
        var email = document.getElementById("emailin").value;
        var phone = document.getElementById("phonein").value;
        var mobile = document.getElementById("mobin").value;
        if(firstName == null){
          document.getElementById("fnameerr").innerHTML = "Please enter First name";
        }
        if(lastName == null){
          document.getElementById("lnameerr").innerHTML = "Please enter Last name";
        }
        if(company == null){
          document.getElementById("comperr").innerHTML = "Please enter Company";
        }
        var recordData = {
            "First_Name": firstName,
            "Last_Name": lastName,
            "Company": company,
            "Email": email,
            "Mobile":mobile,
            "Phone":phone
        };

        ZOHO.CRM.API.insertRecord({
            Entity: "Leads",
            APIData: recordData,
            Trigger: []
        }).then(function (data) {
            console.log(data); // Log the response data to console
            document.getElementById('response').innerHTML = 'Lead created successfully';
        }).catch(function (error) {
            console.error(error); // Log any errors to console
            document.getElementById('response').innerHTML = 'Error occurred while creating lead';
        });
    }

    // Add event listener to the submit button
    document.getElementById('submitbtn').addEventListener('click', function () {
        createLead();
      });

});
ZOHO.embeddedApp.init();