import React from "react";
import Slider from "react-slick";
import Icon from 'components/ui/AppIcon';

const testimonials = [
  {
    text: "રિષિત એન્ટરપ્રાઇઝની કેસર કેરીની ક્વોલિટી અને સ્વાદ ખરેખર લાજવાબ છે. પેકિંગ ઘણું મજબૂત હતું અને દરેક фળ એકદમ તાજું અને કુદરતી રીતે પાકેલું મળ્યું.",
    product: "પ્રીમિયમ કેસર કેરી - 20 kg",
    name: "ભાવનાબેન પટેલ",
    location: "ચીખલી, ગુજરાત",
  },

  {
    text: "મેં દાહોદમાં મારા પરિવાર માટે કેરી મંગાવી હતી. રિષિત એન્ટરપ્રાઇઝનો માલ એકદમ તાજો હતો અને ડિલિવરી પણ સમયસર મળી ગઈ.",
    product: "કેસર કેરી - 10 kg",
    name: "રાજેશ પંચાલ",
    location: "દાહોદ, ગુજરાત",
  },
  {
    text: "ગોધરામાં આટલા સરસ ચીકુ બીજે ક્યાંય નથી મળતા. રિષિત એન્ટરપ્રાઇઝની સર્વિસ અને ક્વોલિટી બંને બહુ જ સરસ છે.",
    product: "તાજા ચીકુ",
    name: "નરેશભાઈ",
    location: "ગોધરા, ગુજરાત",
  },
  {
    text: "લુણાવાડામાં અમને રિષિત એન્ટરપ્રાઇઝ તરફથી ખૂબ જ સારા ફ્રુટ્સ મળ્યા. ફળની મીઠાશ કુદરતી છે, જરૂરથી ફરી ઓર્ડર કરીશ.",
    product: "કેરી ",
    name: "હિતેશ શાહ",
    location: "લુણાવાડા, ગુજરાત",
  },

  // HINDI - Personal Experience
  {
    text: "अहमदाबाद में Rishit Enterprise से मंगाए गए फल एकदम ताजे थे। घर के सभी लोगों को चिकू का स्वाद बहुत पसंद आया।",
    product: "प्रीमियम चिकू",
    name: "मनीष प्रजापति",
    location: "अहमदाबाद, गुजरात",
  },
  {
    text: "बड़ौदा में हमने पहली बार Rishit Enterprise से ऑर्डर किया और क्वालिटी देख कर बहुत खुश हुए। डिलीवरी बहुत फ़ास्ट है।",
    product: "ताजी केसर कैरी",
    name: "संजय भाई",
    location: "वडोदरा (Baroda)",
  },

  // ENGLISH - Personal Experience
  {
    text: "Excellent service from Rishit Enterprise. The fruits delivered in Delhi were as fresh as if they were just picked from the farm. Highly recommended!",
    product: "Premium Fruit Box",
    name: "Sunil Khanna",
    location: "Delhi, India",
  }
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning-subtle text-warning rounded-full mb-3 svg-bg-warning">
            <Icon name="ChatBubbleLeftEllipsisIcon" size={20} className="text-warning" variant="solid" />
            <span className="fw-semibold text-sm text-warningtext-uppercase tracking-wide">
              Customer Stories
            </span>
          </div>
          <h2 className="fw-bold text-5xl mb-4">What Our Customers Say</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Real reviews from real customers who love our farm-fresh fruits
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="slick general-slider">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div className="slider" key={index}>
                  <div className="bg-body rounded-2xl p-12 position-relative">
                    {/* Stars */}
                    <div className="d-flex align-items-center gap-1 mb-4 svg-bg-warning">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Icon key={i} name="StarIcon" size={24} className="text-accent" variant="solid" />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-xl mb-5 leading-relaxed">
                      "{item.text}"
                    </p>

                    {/* Product */}
                    <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-primary-subtle rounded-full mb-4">
                      <Icon name="ShoppingBagIcon" size={16} className="text-primary" />
                      <span className="text-sm text-primary fw-medium">
                        {item.product}
                      </span>
                    </div>

                    {/* User */}
                    <div className="d-flex align-items-center gap-3">
                      <div className="position-relative w-16 h-16 rounded-full overflow-hidden bg-primary-subtle d-flex align-items-center justify-content-center">
                        {item.avatar ? (
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-100 h-100 object-fit-cover"
                          />
                        ) : (
                          <span className="text-primary fw-bold text-lg">
                            {item.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <h4 className="fw-bold text-lg mb-0">
                          {item.name}
                        </h4>
                        <div className="d-flex align-items-center gap-1">
                          <Icon name="MapPinIcon" size={16} />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4 pt-8 border-top" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>


        <div className="d-flex align-items-center justify-content-center mt-48">
          <a href="/all-review" className="btn btn-primary text-white d-flex align-items-center justify-content-center rounded-lg gap-2 px-6 py-3">
            View All
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
