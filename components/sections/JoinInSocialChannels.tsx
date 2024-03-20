import routes from '@/config/routes'
import stls from '@/styles/components/sections/JoinInSocialChannels.module.sass'
import TagOrange from '../general/TagOrange'
import TagWhite from '../general/TagWhite'
import { IconOk, IconTelegram, IconVk, IconYt } from '../icons'
import IconSevenPetalOtanment from '../icons/IconSevenPetalOtanment'
import TwoColumns from '../layout/TwoColumns'
import Wrapper from '../layout/Wrapper'
import SocialChannels from './SocialChannel'

const JoinInSocialChannels = () => {

  const list = [
    {name: 'Telegram', href: routes.external.telegram, icon: <IconTelegram inContacts/>},
    {name: 'YouTube', href: routes.external.youtube, icon: <IconYt inContacts/>},
    {name: 'Одноклассники', href: routes.external.ok, icon: <IconOk inContacts/>},
    {name: 'Вконтакте', href: routes.external.vk, icon: <IconVk inContacts/>}
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumns>
          <div className={stls.left}>
            <div className={stls.tag}>
              <TagWhite>
                Социальные сети
              </TagWhite>
            </div>
            <h2>Присоединяйтесь к нам <span className={stls.orangeTitle}>в социальных сетях</span></h2>
            <div className={stls.channelsList}>
              {list.map((el, index) => (
                <SocialChannels key={index} channel={el} />
              ))}
            </div>
          </div>
          <div className={stls.right}>
            <IconSevenPetalOtanment />
          </div>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}
export default JoinInSocialChannels
