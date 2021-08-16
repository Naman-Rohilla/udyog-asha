import Image from 'next/image'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


export default function Objective({ name, children }) {
    return (
     <main className = "h-full w-full"> 
      <div className="flex flex-col space-y-4 justify-around md:grid md:grid-cols-2 md:justify-items-center items-center  md:h-1/2 bg-black text-white">
         <span className="w-1/2 md:w-3/4">
         <div className="md:w-3/4">
           <div>
             <Image src="/c1.jpg"  className="md:w-full mt-10"></Image>
           </div>
         </div>
         </span>
         <span className="w-3/4 text-justify md:mr-5">
         सन 2006 पासून संस्था शहरी व ग्रामीण भागातील युवक युवतींना व्यवसायाभिमुख प्रशिक्षण प्रात्यक्षिकासह मार्गदर्शन करीत आहे. वाढत चाललेली बेरोजगारी व स्पर्धा ,उच्च शिक्षण करूनही नोकरीची शाश्‍वती नाही. यावर मात करण्याकरिता योग्य मार्गदर्शन व प्रशिक्षण देण्याची आवश्यकता विचारात घेता. आधुनिक पद्धतीचा अवलंब करून गरजेनुसार प्रशिक्षण आयोजित केले . आजपर्यंत प्रशिक्षण घेतलेले प्रशिक्षणार्थी बहुतांश स्वतः व्यावसायिक (उद्योजक) झाले आहे. काही नोकरी सही लागले आहेत. शासनाचे (राज्य व केंद्र) उपक्रम शहरी व ग्रामीण भागात उपलब्ध करून देणारी ही एकमेव संस्था आहे. शासन व उद्योजक यांच्यामधील उत्तम माध्यम राहून प्रामाणिकपनाचे  ध्येय व स्वयंरोजगाराचा भास नव्हेतर ध्यास घेऊन कार्य करण्या करिता उद्योगआशा उदयास आली आहे.  
         </span>
         {/* hidden for desktop version */}
         <span className="w-1/2  md:hidden">
         <div className="md:w-3/4">
           <div>
             <Image src="/c1.jpg"  className="md:w-full"></Image>
           </div>
         </div>
         </span>
         <span className="w-3/4 pb-4 text-justify md:mr-5 md:hidden">
         संपूर्ण महाराष्ट्रात मराठी भाषेच्या माध्यमातून तळागाळातील लोकांपर्यंत व्यवसायाचे ज्ञान पोहोचवणारी अग्रगण्य व्यवसाय प्रशिक्षण व मार्गदर्शन करणारी संस्था आहे. उद्योगाच्या माध्यमातून लघु व मध्यम उद्योग ,कृषी प्रक्रिया उद्योग, कौशल्य तसेच उद्योजकीय प्रशिक्षण , सल्ला व प्रकल्प अहवाल मार्गदर्शन मार्केटिंग सहाय्य, शासकीय कर्ज योजना राबवण्यास मदती करता पुढे आहो.  संस्था तज्ञ व्याख्याते व मार्गदर्शक यांच्या विचारांची देवाण करून उद्योजकाला सर्वोत्तम सेवा पुरवीत आहे. नवउद्योजकांना ही सेवा वाजवी दरात देण्याचा प्रयत्न केला आहे.  श्री प्रविण तातेराव शिंदे सर यांच्या मार्गदर्शनाखाली सर्व क्षेत्रातील प्रशिक्षण आयोजित होत आहे. सरांची  संशोधन वृत्ती ,जिद्द, चिकाटी, दूरदृष्टी, वेळेचे व्यवस्थापन, अष्टपैलू व्यक्तिमत्व असल्याने जवळपास तीनशे उद्योग व्यवसायाचे ज्ञान असणारे व आतापर्यंत लाखो लोकांना प्रशिक्षण देणारे स्वतः मार्गदर्शन करतात.
         </span>
      </div>
      <div className="hidden md:grid md:grid-cols-2 justify-items-center items-center h-full  md:h-1/2 bg-black text-white">
      <span className="w-3/4  text-justify md:ml-5">
      संपूर्ण महाराष्ट्रात मराठी भाषेच्या माध्यमातून तळागाळातील लोकांपर्यंत व्यवसायाचे ज्ञान पोहोचवणारी अग्रगण्य व्यवसाय प्रशिक्षण व मार्गदर्शन करणारी संस्था आहे. उद्योगाच्या माध्यमातून लघु व मध्यम उद्योग ,कृषी प्रक्रिया उद्योग, कौशल्य तसेच उद्योजकीय प्रशिक्षण , सल्ला व प्रकल्प अहवाल मार्गदर्शन मार्केटिंग सहाय्य, शासकीय कर्ज योजना राबवण्यास मदती करता पुढे आहो.  संस्था तज्ञ व्याख्याते व मार्गदर्शक यांच्या विचारांची देवाण करून उद्योजकाला सर्वोत्तम सेवा पुरवीत आहे. नवउद्योजकांना ही सेवा वाजवी दरात देण्याचा प्रयत्न केला आहे.  श्री प्रविण तातेराव शिंदे सर यांच्या मार्गदर्शनाखाली सर्व क्षेत्रातील प्रशिक्षण आयोजित होत आहे. सरांची  संशोधन वृत्ती ,जिद्द, चिकाटी, दूरदृष्टी, वेळेचे व्यवस्थापन, अष्टपैलू व्यक्तिमत्व असल्याने जवळपास तीनशे उद्योग व्यवसायाचे ज्ञान असणारे व आतापर्यंत लाखो लोकांना प्रशिक्षण देणारे स्वतः मार्गदर्शन करतात.
         </span>
         <span className="w-3/4">
         <div className="md:w-3/4 float-right">
           <div className="">
             <Image src="/c1.jpg"  className="md:w-full my-10"></Image>
           </div>
         </div>
         </span>
         
      </div>
      </main> 
     
      
    )
}
