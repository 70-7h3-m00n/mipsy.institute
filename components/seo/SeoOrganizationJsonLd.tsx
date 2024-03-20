import { OrganizationJsonLd } from 'next-seo'
import { routes, company } from '@/config/index'

const SeoOrganizationJsonLd = () => {
  return (
    <>
      <OrganizationJsonLd
        organizationType='EducationalOrganization'
        id={routes.front.root}
        logo={`${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`}
        legalName={company.fullName}
        name={company.name}
        address={{
          streetAddress: `${company.addresses.default.street.type} ${company.addresses.default.street.name} ${company.addresses.default.street.door}, ${company.addresses.default.room}`,
          addressLocality: company.addresses.default.city,
          postalCode: company.addresses.default.zip,
          addressCountry: company.addresses.default.countryCode
        }}
        contactPoints={[
          {
            telephone: company.phoneNumbers.default.val,
            contactType: company.phoneNumbers.default.contactType,
            areaServed: company.phoneNumbers.default.areaServed,
            availableLanguage: company.phoneNumbers.default.languages
          }
        ]}
        sameAs={[routes.front.root]}
        url={routes.front.root}
      />
    </>
  )
}

export default SeoOrganizationJsonLd
