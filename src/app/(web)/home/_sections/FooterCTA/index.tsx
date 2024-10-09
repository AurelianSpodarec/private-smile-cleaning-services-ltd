import Section from "@/components/_layout/Section";
import PageHeader from "@/components/molecules/PageHeader";

function SectionFooterCTA() {
  return (
    <Section size="clean">
      <img className="object-cover object-center w-full h-[600px]" src="https://jasslondon.co.uk/cdn/shop/products/Jass_London_homes_monochrome_Mural_home_office_living_wallpaper_minimalist14601.jpg?v=1635363382" />

      <PageHeader 
        title="Ready to get started?"
      />

      <button>
        Find your cleaner now
      </button>
      
    </Section>
  )
}

export default SectionFooterCTA
