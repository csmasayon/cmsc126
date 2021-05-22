$( function(){
    $( "#radioset" ).buttonset();

    $( "#datepicker" ).datepicker({
       changeMonth: true,
       changeYear: true,
    });

    $( "#autocomplete" ).autocomplete({
        source: [ "Abra",
        "Agusan del Norte",
        "Agusan del Sur",
        "Aklan",
        "Albay",
        "Antique",
        "Apayao",
        "Aurora",
        "Basilan",
        "Bataan",
        "Batanes",
        "Batangas",
        "Benguet",
        "Biliran",
        "Bohol",
        "Bukidnon",
        "Bulacan",
        "Cagayan",
        "Camarines Norte",
        "Camarines Sur",
        "Camiguin",
        "Capiz",
        "Catanduanes",
        "Cavite",
        "Cebu",
        "Cotabato",
        "Davao de Oro",
        "Davao del Norte",
        "Davao del Sur",
        "Davao Occidental",
        "Davao Oriental",
        "Dinagat Islands",
        "Eastern Samar",
        "Guimaras",
        "Ifugao",
        "Ilocos Norte",
        "Ilocos Sur",
        "Iloilo",
        "Isabela",
        "Kalinga",
        "La Union",
        "Laguna",
        "Lanao del Norte",
        "Lanao del Sur",
        "Leyte",
        "Maguindanao",
        "Marinduque",
        "Masbate",
        "Misamis Occidental",
        "Misamsi Oriental",
        "Mountain Province",
        "Negros Occidental",
        "Negros Oriental",
        "Northern Samar",
        "Nueva Ecija",
        "Nueva Vizcaya",
        "Occidental Mindoro",
        "Oriental Mindoro",
        "Palawan",
        "Pampanga",
        "Pangasinan",
        "Quezon",
        "Quirino",
        "Rizal",
        "Romblon",
        "Samar",
        "Sarangani",
        "Siquijor",
        "Sorsogon",
        "South Cotabato",
        "Southern Leyte",
        "Sultan Kudarat",
        "Sulu",
        "Surigao del Norte",
        "Surigao del Sur",
        "Tarlac",
        "Tawi-Tawi",
        "Zambales",
        "Zamboanga del Norte",
        "Zamboanga del Sur",
        "Zamboanga Sibugay",
        "Metro Manila"],
        delay: 0,
    });

    $("#yearLevel").spinner({
        min: 1});
   });

   let saveFile = () => {
     const first = document.getElementById('first');
     const last = document.getElementById('last');
     const gender = $('input[name="gender"]:checked').val();
     const birthday = document.getElementById('datepicker');
     const province = document.getElementById('autocomplete');
     const year = document.getElementById('yearLevel');

     let data =
         '\r Sign Up Form Details:' + ' \r\n ' +
         '\r First Name: ' + first.value + ' \r\n ' +
         'Last Name: ' + last.value + ' \r\n ' +
         'Gender: ' + gender + ' \r\n ' +
         'Birthday: ' + birthday.value + ' \r\n '+
         'Province: ' + province.value + ' \r\n ' +
         'Year Level: ' + year.value;

     const textToBLOB = new Blob([data], { type: 'text/plain' });
     const sFileName = 'SignUpForm.txt';

     let newLink = document.createElement("a");
     newLink.download = sFileName;

     if (window.webkitURL != null) {
         newLink.href = window.webkitURL.createObjectURL(textToBLOB);
     }
     else {
         newLink.href = window.URL.createObjectURL(textToBLOB);
         newLink.style.display = "none";
         document.body.appendChild(newLink);
     }

     newLink.click();
 }

 $(function() {
    $( "#menu-1" ).menu();
    $("input[type='number']").inputSpinner();
 });
