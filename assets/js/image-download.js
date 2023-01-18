$( "#download" ).on( "click", function() {
    html2canvas(document.querySelector("#aertel")).then(canvas => {
      canvas.toBlob(function(blob) {
        window.saveAs(blob, 'not-aertel.png');
      });
      });
  });