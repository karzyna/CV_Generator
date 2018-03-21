 function foo(){
    var text;
     if ($("input[id='otheropt']:checked") && ($("input[name='keywords_other_option']").val() !== '')){
        text = $("input[name='keywords_other_option']").val();
    }else{
        text = $("input[type=radio]:checked").val();
    }; 
    
    //drukowanie
    var doc = new jsPDF();

    doc.rect(10, 10, 190, 279);
    doc.setDrawColor(58, 45, 45);

    doc.setFontSize(22);
    doc.text("Curriculum vitae", 75,30);
    doc.line(20, 32, 190, 32);
    doc.setFontSize(16);
    doc.text("Dane osobowe:", 20,50);
    doc.line(20, 52, 190, 52);
    doc.text("Imie: " + ($('#name').val()), 20,60);
    doc.text("Nazwisko: " + ($("#srname").val()), 110,60);
    doc.text("Data urodzenia: " + ($("#date").val()), 20,70);
    doc.text("Miejsce urodzenia: " + ($("#place").val()), 20,80);
    doc.text("Dane kontaktowe:", 20,100);
    doc.line(20, 102, 190, 102);
    doc.text("Email: " + ($("#email").val()), 20,110);
    doc.text("Nr tel: " + ($("#phone").val()), 110,1010);
    doc.text("Wyksztalcenie:", 20,130);
    doc.text(text, 20,140);
    doc.line(20, 132, 190, 132);
    doc.text("Dodatkowe umiejetnosci: ", 20,160);
    doc.line(20, 162, 190, 162);
    doc.text(($('textarea').val()), 20,170);
    doc.save('cv.pdf'); 
    };