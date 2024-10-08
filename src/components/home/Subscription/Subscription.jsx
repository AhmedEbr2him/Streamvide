import { SUBSCRIPTIONS } from '../../../constant/mockData';
import { Container, HeadingTitle, Paragraph } from '../../../styles/global/default';
import { BaseLinkSecondary } from '../../../styles/theme/components/Button';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { SubscriptionItemWrapper, SubscriptionWrapper } from './Subscription.styles';
import PropTypes from 'prop-types';
const Subscription = () => {
  return (
    <SubscriptionWrapper>
      <SectionTitle
        title={"Choose the plan that's right for you"}
        text={
          'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'
        }
      />

      <Container>
        <div className='subs-content'>
          <div className='subs-list grid'>
            {SUBSCRIPTIONS?.map(subscription => (
              <SubscriptionItem key={subscription.id} data={subscription} />
            ))}
          </div>
        </div>
      </Container>
    </SubscriptionWrapper>
  );
};

const SubscriptionItem = ({ data }) => {
  return (
    <SubscriptionItemWrapper className='bg-black10 flex flex-col justify-between'>
      <div className='item-top'>
        <HeadingTitle>{data.plane}</HeadingTitle>
        <Paragraph>{data.description}</Paragraph>
      </div>
      <div className='item-bottom'>
        <div className='item-price flex items-basline flex-wrap'>
          <p className='item-price-text font-semibold'>$ {data.monthly_price}</p>
        </div>

        <div className='item-btn-group flex items-center flex-wrap'>
          <BaseLinkSecondary className='item-btn'>
            <span className='btn-text'>Start Free Trail</span>
          </BaseLinkSecondary>
          <BaseLinkSecondary className='item-btn'>
            <span className='btn-text'>Choose Plan</span>
          </BaseLinkSecondary>
        </div>
      </div>
    </SubscriptionItemWrapper>
  );
};
export default Subscription;

SubscriptionItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    plane: PropTypes.string,
    description: PropTypes.string,
    monthly_price: PropTypes.number,
  }),
};
