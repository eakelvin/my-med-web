import React, { useEffect, useState, useRef  } from 'react'
import Dropdown from '../Components/Dropdown'
import { FaShare } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import { FaRegCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { BsGraphDownArrow } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { useGetPageVisitsMutation } from '../Slices/reportSlice';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Graph from '../Components/Chart';
import Donut from '../Components/Timing';


const Report = () => {
  const [getPageVisits] = useGetPageVisitsMutation()
  const { userInfo } = useSelector((state) => state.auth)
  const [pageVisits, setPageVisits] = useState(0)
  const pdfRef = useRef()

  const downloadPDF = () => {
    const input = pdfRef.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30 
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('report.pdf')
    })
  }

  useEffect(() => {
    const getReports = async () => {
      try {
        const res = await getPageVisits(userInfo._id).unwrap()
        // console.log(res);
        const totalPageVisits = res.reduce((total, visit) => total + visit.pageVisits, 0);
        setPageVisits(totalPageVisits)
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.message || error?.error || 'An error occurred');
      }
    }

    getReports()
  }, [])


  return (
    <div className='p-5'>
      <Dropdown />
      <div ref={pdfRef}>

      <div className='flex justify-between'>
        <div>
          <h1 className='font-semibold text-lg'>Report</h1>
          <p className='text-sm text-slate-500'>This is an overall view of your medicine reports</p>
        </div>
        <div>
          <button 
            onClick={downloadPDF} 
            className='flex text-xl border border-green-500 px-2 py-1 rounded-lg hover:bg-slate-500'>
              Share
            <span className='mx-2 mt-1'><FaShare /></span>
          </button>
        </div>
      </div>
      <div className='border-b-2 mt-3'></div>

      <div className='mt-3'>
        <h1 className='font-semibold text-lg'>Overall Visit</h1>
        <p className='text-sm text-slate-500'>This is the total number of times you have visited the app</p>
        <div className='mt-1 border border-slate-600 p-5 rounded-lg'>
          <div className='flex justify-center'>
            <SlGraph size={50} />
            <h1 className='ml-3'>
              <span className='font-extrabold text-2xl mx-1'>{pageVisits}</span>
              Visits
            </h1>
          </div>
        </div>
      </div>

      {/* <div className='mt-3'>
        <h1 className='font-semibold text-lg'>Medication Timing</h1>
        <p className='text-sm text-slate-500'>This tracks the timimg of your medications and also tell you when you are late</p>
        <div className='mt-1 border border-slate-600 p-5'>
          <Donut />
          <div className='flex justify-center'>
            <FaRegCircle size={100} />
            <div className='ml-2 grid grid-cols-1'>
              <div><h1 className=''>Pill Timing</h1></div>
              <div className='flex'>
                <GoDotFill size={25} />
                <p>Accurate Time</p>
              </div>
              <div className='flex'>
                <GoDotFill color='red' size={25} />
                <p>Late</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='mt-3'>
        <h1 className='font-semibold text-lg'>Medication</h1>
        <div className='mt-1 border border-slate-600 p-5 rounded-lg'>
          <div className='mt-1'>
            <Graph />
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Report