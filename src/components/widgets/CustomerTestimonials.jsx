import Icon from "components/ui/AppIcon";

const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "રિષિત એન્ટરપ્રાઇઝની કેસર કેરીની ક્વોલિટી અને સ્વાદ ખરેખર લાજવાબ છે. પેકિંગ ઘણું મજબૂત હતું અને દરેક ફળ એકદમ તાજું અને કુદરતી રીતે પાકેલું મળ્યું.",
      product: "પ્રીમિયમ કેસર કેરી - 20 kg",
      name: "ભાવનાબેન પટેલ",
      rating: 5,
      location: "ચીખલી, ગુજરાત",
    },

    {
      id: 2,
      text: "મેં દાહોદમાં મારા પરિવાર માટે કેરી મંગાવી હતી. રિષિત એન્ટરપ્રાઇઝનો માલ એકદમ તાજો હતો અને ડિલિવરી પણ સમયસર મળી ગઈ.",
      product: "કેસર કેરી - 10 kg",
      name: "રાજેશ પંચાલ",
      rating: 5,
      location: "દાહોદ, ગુજરાત",
    },
    {
      id: 3,
      text: "ગોધરામાં આટલા સરસ ચીકુ બીજે ક્યાંય નથી મળતા. રિષિત એન્ટરપ્રાઇઝની સર્વિસ અને ક્વોલિટી બંને બહુ જ સરસ છે.",
      product: "તાજા ચીકુ",
      name: "નરેશભાઈ",
      rating: 5,
      location: "ગોધરા, ગુજરાત",
    },
    {
      id: 4,
      text: "લુણાવાડામાં અમને રિષિત એન્ટરપ્રાઇઝ તરફથી ખૂબ જ સારા ફ્રુટ્સ મળ્યા. ફળની મીઠાશ કુદરતી છે, જરૂરથી ફરી ઓર્ડર કરીશ.",
      product: "કેરી ",
      name: "હિતેશ શાહ",
      rating: 5,
      location: "લુણાવાડા, ગુજરાત",
    },

    // HINDI - Personal Experience
    {
      id: 5,
      text: "अहमदाबाद में Rishit Enterprise से मंगाए गए फल एकदम ताजे थे। घर के सभी लोगों को चिकू का स्वाद बहुत पसंद आया।",
      product: "प्रीमियम चिकू",
      name: "मनीष प्रजापति",
      rating: 5,
      location: "अहमदाबाद, गुजरात",
    },
    {
      id: 6,
      text: "बड़ौदा में हमने पहली बार Rishit Enterprise से ऑर्डर किया और क्वालिटी देख कर बहुत खुश हुए। डिलीवरी बहुत फ़ास्ट है।",
      product: "ताजी केसर कैरी",
      name: "संजय भाई",
      rating: 5,
      location: "वडोदरा (Baroda)",
    },

    // ENGLISH - Personal Experience
    {
      id: 7,
      text: "Excellent service from Rishit Enterprise. The fruits delivered in Delhi were as fresh as if they were just picked from the farm. Highly recommended!",
      product: "Premium Fruit Box",
      name: "Sunil Khanna",
      rating: 5,
      location: "Delhi, India",
    }
  ];
  const stats = [
    { icon: "UserGroupIcon", value: "1500+", label: "Happy Customers" },
    { icon: "StarIcon", value: "5/5", label: "Average Rating" },
    { icon: "TruckIcon", value: "1,500+", label: "Orders Delivered" },
    { icon: "ArrowPathIcon", value: "85%", label: "Repeat Customers" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-warning-subtle text-warning rounded-full mb-3">
            <Icon
              name="ChatBubbleLeftEllipsisIcon"
              size={18}
              className="text-accent"
              variant="solid"
            />
            <span className="text-sm fw-semibold text-warning">
              Customer Stories
            </span>
          </div>
          <h2 className="fw-bold text-4xl text-primary mb-3">
            What Our Customers Say
          </h2>
          <p className="text-lg m-0">
            Real experiences from families, restaurants, and businesses who trust
            Rishit Fruits for their mango needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="d-grid md-grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-body border rounded-xl p-6 shadow-organic shadow-card-md-hover"
            >
              {/* Header */}
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="position-relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-primary-subtle d-flex align-items-center justify-content-center">
                  <span className="text-primary fw-bold text-lg">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h4 className="fw-bold text-base">
                    {testimonial.name}
                  </h4>
                  {/* <p className="text-sm">
                    {testimonial.role}
                  </p> */}
                  {/* Rating */}
                  <div className="d-flex align-items-center gap-1 mt-1 svg-bg-warning">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="StarIcon"
                        size={14}
                        className="text-warning"
                        variant="solid"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-sm text-heading leading-relaxed mb-0">
                "{testimonial.text}"
              </p>

              {/* Footer */}
              <div className="d-flex align-items-center justify-content-between pt-3 mt-3 border-top">
                <div className="d-flex align-items-center gap-2">
                  <Icon
                    name="ShoppingBagIcon"
                    size={16}
                    className="text-body"
                  />
                  <span className="text-xs">
                    {testimonial.product}
                  </span>
                </div>
                <span className="text-xs">
                  {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 d-grid grid-cols-1 md-grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-body rounded-xl shadow-organic border">
              <div className="w-16 h-16 bg-primary-subtle rounded-full d-flex align-items-center justify-content-center mx-auto mb-3">
                <Icon
                  name={stat.icon}
                  size={32}
                  className="text-primary"
                  variant="solid"
                />
              </div>
              <p className="fw-bold text-3xl text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm m-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
