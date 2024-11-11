
import React from 'react'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function Invoice() {
  const ref = React.createRef();
 
  const generatePdf = () => {
    const element = ref.current;

    const originalWidth = element.style.width;
    element.style.width = '895px';

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, A4 size (210mm x 297mm)

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('invoice.pdf');
      
      element.style.width = originalWidth
    });
  };

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full z-50">
      <button onClick={generatePdf} className="bg-blue-500 text-white p-2 rounded mb-4">
        Download Invoice
      </button>

      <>
        {/* Invoice */}
        <div ref={ref} className="w-full max-w-[895px]">
          <div className="s">
            {/* Card */}
            <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl">
              {/* Grid */}
              <div className="flex justify-between">
                <div>
                  <svg
                    className="size-10"
                    width={26}
                    height={26}
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12"
                      className="stroke-blue-600"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                    <path
                      d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12"
                      className="stroke-blue-600"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                    <circle
                      cx={13}
                      cy="13.0214"
                      r={5}
                      fill="currentColor"
                      className="fill-blue-600"
                    />
                  </svg>
                  <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600">
                    Preline Inc.
                  </h1>
                </div>
                {/* Col */}
                <div className="text-end">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Invoice #
                  </h2>
                  <span className="mt-1 block text-gray-500">3682303</span>
                  <address className="mt-4 not-italic text-gray-800">
                    45 Roker Terrace
                    <br />
                    Latheronwheel
                    <br />
                    KW5 8NW, London
                    <br />
                    United Kingdom
                    <br />
                  </address>
                </div>
                {/* Col */}
              </div>
              {/* End Grid */}
              {/* Grid */}
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Bill to:</h3>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sara Williams
                  </h3>
                  <address className="mt-2 not-italic text-gray-500">
                    280 Suzanne Throughway,
                    <br />
                    Breannabury, OR 45801,
                    <br />
                    United States
                    <br />
                  </address>
                </div>
                {/* Col */}
                <div className="sm:text-end space-y-2">
                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800">
                        Invoice date:
                      </dt>
                      <dd className="col-span-2 text-gray-500">03/10/2018</dd>
                    </dl>
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800">
                        Due date:
                      </dt>
                      <dd className="col-span-2 text-gray-500">03/11/2018</dd>
                    </dl>
                  </div>
                  {/* End Grid */}
                </div>
                {/* Col */}
              </div>
              {/* End Grid */}
              {/* Table */}
              <div className="mt-6">
                <div className="border border-gray-200 p-4 rounded-lg space-y-4">
                  <div className="hidden sm:grid sm:grid-cols-5">
                    <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                      Item
                    </div>
                    <div className="text-start text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </div>
                    <div className="text-start text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </div>
                    <div className="text-end text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </div>
                  </div>
                  <div className="hidden sm:block border-b border-gray-200" />
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Item
                      </h5>
                      <p className="font-medium text-gray-800">Design UX and UI</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </h5>
                      <p className="text-gray-800">1</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Rate
                      </h5>
                      <p className="text-gray-800">5</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </h5>
                      <p className="sm:text-end text-gray-800">$500</p>
                    </div>
                  </div>
                  <div className="sm:hidden border-b border-gray-200" />
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Item
                      </h5>
                      <p className="font-medium text-gray-800">Web project</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </h5>
                      <p className="text-gray-800">1</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Rate
                      </h5>
                      <p className="text-gray-800">24</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </h5>
                      <p className="sm:text-end text-gray-800">$1250</p>
                    </div>
                  </div>
                  <div className="sm:hidden border-b border-gray-200" />
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    <div className="col-span-full sm:col-span-2">
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Item
                      </h5>
                      <p className="font-medium text-gray-800">SEO</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Qty
                      </h5>
                      <p className="text-gray-800">1</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Rate
                      </h5>
                      <p className="text-gray-800">6</p>
                    </div>
                    <div>
                      <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                        Amount
                      </h5>
                      <p className="sm:text-end text-gray-800">$2000</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Table */}
              {/* Flex */}
              <div className="mt-8 flex sm:justify-end">
                <div className="w-full max-w-2xl sm:text-end space-y-2">
                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800">
                        Subtotal:
                      </dt>
                      <dd className="col-span-2 text-gray-500">$2750.00</dd>
                    </dl>
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800">
                        Total:
                      </dt>
                      <dd className="col-span-2 text-gray-500">$2750.00</dd>
                    </dl>
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800">Tax:</dt>
                      <dd className="col-span-2 text-gray-500">$39.00</dd>
                    </dl>
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800">
                        Amount paid:
                      </dt>
                      <dd className="col-span-2 text-gray-500">$2789.00</dd>
                    </dl>
                    <dl className="grid sm:grid-cols-5 gap-x-3">
                      <dt className="col-span-3 font-semibold text-gray-800">
                        Due balance:
                      </dt>
                      <dd className="col-span-2 text-gray-500">$0.00</dd>
                    </dl>
                  </div>
                  {/* End Grid */}
                </div>
              </div>
              {/* End Flex */}
              <div className="mt-8 sm:mt-12">
                <h4 className="text-lg font-semibold text-gray-800">Thank you!</h4>
                <p className="text-gray-500">
                  If you have any questions concerning this invoice, use the following
                  contact information:
                </p>
                <div className="mt-2">
                  <p className="block text-sm font-medium text-gray-800">
                    example@site.com
                  </p>
                  <p className="block text-sm font-medium text-gray-800">
                    +1 (062) 109-9222
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm text-gray-500">© 2022 Preline.</p>
            </div>
            {/* End Card */}
            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-x-3">
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1={12} x2={12} y1={15} y2={3} />
                </svg>
                Invoice PDF
              </a>
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect width={12} height={8} x={6} y={14} />
                </svg>
                Print
              </a>
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Invoice */}
      </>
    </div>
  )
}

export default Invoice
