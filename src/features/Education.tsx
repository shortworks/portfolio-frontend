import EntryCard from '../components/EntryCard'
import psu_logomark_light from '../assets/edu-psu-logomark-light.png'
import pcc_logomark_light from '../assets/edu-pcc-logomark-light.png'

export default function Education() {
  return (
    <div className="w-full px-2">
      <h1 className="font-header font-size-header text-left">Education</h1>
      <div className="mt-1 flex flex-col justify-center gap-2">
        <EntryCard
          img_url={psu_logomark_light}
          title="BS in Computer Engineering, Minor in Mathematics"
          sm_title="BS in CE"
          sub_title="Minor in Math"
          entity="Portland State University"
          location="Portland, OR"
          end_date="Mar 2022"
        />
        <EntryCard
          img_url={pcc_logomark_light}
          title="AAS in Electronic Engineering Tech."
          sm_title="AAS in EET"
          entity="Portland Community College"
          sm_entity="Portland Comm. College"
          location="Portland, OR"
          end_date="Sep 2011"
        />
      </div>
    </div>
  )
}
