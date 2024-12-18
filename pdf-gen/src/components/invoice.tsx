import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";



export default function Invoice() {
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("examplepdf.pdf");
  };

  return (

   

    
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center" >
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <div ref={printRef} className="p-8 bg-white border border-gray-200 ">
          <div className="flex justify-between items-center mb-5">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">E-Ticket</h1>
              <p className="text-sm text-gray-600">T-Number=165894</p>
            </div>

            <div className="text-right">
              <h2 className="font-semibold">Podi Manike Express Train</h2>
            </div>
          </div>
          
          <div className="flex justify-between mb-2">
                <span className="font-bold">Name Of Passenger <br /> <span className="font-light">Kasun Sri Buddika</span> </span>
                <span className="font-bold">Information <br />
                <span className="font-light">1st class</span></span>
              </div>

<hr />

              <div className="flex justify-between mb-2">
                <span className="font-bold">From <br /> <span className="font-light">Colombo Fort</span> </span>
                <span className="font-bold">Train <br />
                <span className="font-light">T-2135</span></span>
              </div>
          

              <div className="flex justify-between mb-8">
                <span className="font-bold">To<br /> <span className="font-light">Badulla</span> </span>
                <span className="font-bold" >Seat No  <br />
                <span className="font-light ml-6">W-10</span> </span>
              </div>

    <hr />

    <div className="flex justify-between mb-2">
                <span className="font-bold">Date <br /> <span className="font-light">20 June 2024</span> </span>
                <span className="font-bold">Train <br />
                <span className="font-light">T-2135</span></span>
              </div>
          
    <hr />

          <div className="flex justify-end">
            <div className="w-64">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>Rs.2500.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (10%):</span>
                <span>Rs.250.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>Rs.2750.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleDownloadPdf}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
    
  );
}