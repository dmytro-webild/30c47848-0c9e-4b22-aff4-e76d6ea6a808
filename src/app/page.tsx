"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Car, Leaf, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "হোম",          id: "home"},
        {
          name: "মেন্যু",          id: "menu"},
        {
          name: "আমাদের সম্পর্কে",          id: "about"},
        {
          name: "যোগাযোগ",          id: "contact-info"},
        {
          name: "প্রশ্নাবলী",          id: "faq"},
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3F0rrJvfWoXa7lPjV14kgNAY0zy/uploaded-1781223832909-vm56o7oy.png"
      logoAlt="Rondhon Shala Logo"
      brandName="রন্ধন শালা"
    />
  </div>

  {/* New text element below navigation */}
  <h2
    className="text-center font-bold py-8"
    style={{
      backgroundImage: 'linear-gradient(to right, var(--primary-cta), var(--accent))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      color: 'transparent', // Fallback for browsers that don't support text-fill-color
      fontSize: 'clamp(3rem, 7vw, 6rem)', // Responsive font size
      fontFamily: 'var(--font-mulish), sans-serif',
    }}
  >
    রন্ধন শালা
  </h2>

  <div id="home" data-section="home">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      title="স্বাদ ও প্রকৃতির এক অপূর্ব মেলবন্ধন"
      description="কোলাহলমুক্ত ও মনোরম প্রাকৃতিক পরিবেশে আধুনিক ও সুস্বাদু খাবারের আসল স্বাদ নিন একমাত্র রন্ধন শালা-য়।"
      testimonials={[
        {
          name: "সায়মা বেগম",          handle: "@সায়মা_বেগম",          testimonial: "রন্ধন শালারা সেরা খাবার পরিবেশন করে! তাদের চিকেন বিরিয়ানি অতুলনীয়।",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg"},
        {
          name: "আরিফ হোসেন",          handle: "@আরিফ_হোসেন",          testimonial: "পরিবেশ খুবই চমৎকার এবং সার্ভিসও দুর্দান্ত। আমি পিজ্জা আর ক্রাম্ব প্রন ফ্রাই খুব পছন্দ করেছি।",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/content-caucasian-businesswoman-standing-with-folded-hands-portrait-confident-adult-beautiful-female-office-employer-black-blouse-posing-work-business-company-management-concept_74855-6952.jpg"},
        {
          name: "ফারিহা ইসলাম",          handle: "@ফারিহা_ইসলাম",          testimonial: "তাদের স্পেশাল স্যুপটা এত মজাদার যে বারবার খেতে ইচ্ছা করে। এখানকার খাবারের মান অসামান্য!",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-indian-beard-man-pink-tshirt-sitting-against-wooden-table-cafe-india-model-posed-outdoor_627829-2594.jpg"},
        {
          name: "মাহমুদ হাসান",          handle: "@মাহমুদ_হাসান",          testimonial: "পরিবারের সাথে ভালো সময় কাটানোর জন্য পারফেক্ট জায়গা। খাবার সব ফ্রেশ আর সুস্বাদু।",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-girl-with-hand-her-chin_1169-110.jpg"},
        {
          name: "তাসনিয়া জান্নাত",          handle: "@তাসনিয়া_জান্নাত",          testimonial: "রন্ধন শালারা সত্যিই খাবারের স্বাদ এবং গুণগত মান বজায় রেখেছে। তাদের সেবাও প্রশংসনীয়।",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-shirt-clothes-fashion-stylish-man-posing_158538-5312.jpg"},
        {
          name: "নুরুল আমিন",          handle: "@নুরুল_আমিন",          testimonial: "আমি তাদের মেন্যুর ক্রাম্ব প্রন ফ্রাই এর ভক্ত। খুবই মুচমুচে আর সুস্বাদু ছিল!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg"},
      ]}
      tag="৩.৮ রেটিং প্রাপ্ত রেস্তোরাঁ"
      tagIcon={Star}
      
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-sitting-stairs_1262-3109.jpg",          alt: "Customer Saima"},
        {
          src: "http://img.b2bpic.net/free-photo/elderly-business-woman-office-isolated_1303-21402.jpg",          alt: "Customer Arif"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-speech-bubble-showing-smiling-face-cold-sweat-emoji_23-2147842250.jpg",          alt: "Customer Fariha"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-complicated-troubled-woman-glasses-frowning-looking-displeased-standing_1258-127276.jpg",          alt: "Customer Mahmud"},
        {
          src: "http://img.b2bpic.net/free-photo/people-recording-their-house-tour_23-2151139106.jpg",          alt: "Customer Tasnia"},
      ]}
      avatarText="আমাদের সন্তুষ্ট গ্রাহক"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3F0rrJvfWoXa7lPjV14kgNAY0zy/uploaded-1781224008827-qyx9utnl.jpg"
      imageAlt="Restaurant ambiance with dimmed lighting"
      marqueeItems={[
        {
          type: "text",          text: "সেরা স্বাদের নিশ্চয়তা"},
        {
          type: "text-icon",          text: "বিশুদ্ধ উপাদান",          icon: Leaf,
        },
        {
          type: "text",          text: "মনোরম পরিবেশ"},
        {
          type: "text-icon",          text: "দ্রুত ডেলিভারি",          icon: Car,
        },
        {
          type: "text",          text: "আতিথেয়তা"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "আমাদের সম্পর্কে: রন্ধন শালারা কে?"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/woman-working-as-professional-chef_23-2151864180.jpg",          alt: "Chef cooking in a modern kitchen"},
      ]}
      buttons={[
        {
          text: "আমাদের গল্প জানুন",          href: "#contact-info"},
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "product-1",          name: "Chicken BBQ Pizza",          price: "৳২০০ - ৳৪০০",          imageSrc: "http://img.b2bpic.net/free-photo/vegetarian-pizza-with-zucchini-tomato-peppers-mushrooms_123827-22009.jpg",          imageAlt: "Chicken BBQ Pizza"},
        {
          id: "product-2",          name: "Crumb Prawns Fry",          price: "৳২৫০ - ৳৩৫০",          imageSrc: "http://img.b2bpic.net/free-photo/granita-dessert-with-orange-still-life-flat-lay_23-2149412331.jpg",          imageAlt: "Crumb Prawns Fry"},
        {
          id: "product-3",          name: "Special Soup",          price: "৳১৮০ - ৳৩০০",          imageSrc: "http://img.b2bpic.net/free-photo/mushroom-soup-side-view_140725-9149.jpg",          imageAlt: "Special Soup"},
        {
          id: "product-4",          name: "Chicken Biriyani",          price: "৳৩০০ - ৳৫৫০",          imageSrc: "http://img.b2bpic.net/free-photo/chigirtma-sebzi-plov-rice-garnish-with-vegetables-herbs_114579-876.jpg",          imageAlt: "Chicken Biriyani"},
        {
          id: "product-5",          name: "Pasta Carbonara",          price: "৳৩২০ - ৳৫০০",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dough-pasta-cooked-tasty-with-meat-vegetables-salted-inside-round-green-plate-with-flower-pink-desk_140725-24378.jpg",          imageAlt: "Pasta Carbonara"},
        {
          id: "product-6",          price: "৳১০০ - ৳১৮০",          name: "Fresh Juice",          imageSrc: "http://img.b2bpic.net/free-photo/glass-mango-juice-with-fresh-mango-slices-table_84443-94863.jpg",          imageAlt: "Fresh Juice"},
      ]}
      title="আমাদের স্পেশাল আইটেম সমূহ"
      description="সেরা মানের উপাদান থেকে তৈরি, আমাদের মেন্যু প্রতিটি খাবারে নতুন স্বাদ নিয়ে আসে।"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "testimonial-item-1",          name: "সায়মা বেগম",          role: "খাবার ব্লগার",          company: "ফুড ট্রাভেলার",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-man-banner-concept-with-copy-space_23-2149601461.jpg",          imageAlt: "Saima Begum"},
        {
          id: "testimonial-item-2",          name: "আরিফ হোসেন",          role: "ব্যবস্থাপনা পরিচালক",          company: "এ.আর. কর্পোরেশন",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-smiling_93675-133804.jpg",          imageAlt: "Arif Hossain"},
        {
          id: "testimonial-item-3",          name: "ফারিহা ইসলাম",          role: "শিক্ষিকা",          company: "সিটি কলেজ",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing-round-sunglasses_158538-5337.jpg",          imageAlt: "Fariha Islam"},
        {
          id: "testimonial-item-4",          name: "মাহমুদ হাসান",          role: "ব্যবসায়ী",          company: "মাহমুদ এন্টারপ্রাইজ",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/serious-beautiful-middle-aged-business-woman_1262-3072.jpg",          imageAlt: "Mahmud Hasan"},
        {
          id: "testimonial-item-5",          name: "তাসনিয়া জান্নাত",          role: "গৃহিনী",          company: "গৃহপরিচারিকা",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-man-isolated-white-background_23-2148056445.jpg",          imageAlt: "Tasnia Jannat"},
      ]}
      title="আমাদের গ্রাহকরা কী বলছেন"
      description="আমাদের সুস্বাদু খাবার এবং মনোরম পরিবেশ সম্পর্কে তাদের অভিজ্ঞতা শুনুন।"
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "নেচারস ফ্রেশ",        "দ্য কফি বিন",        "প্রাইম সী-ফুড",        "মায়ের ডেইরি",        "সুগন্ধি মশলা",        "আর্টিসান বেকারি",        "গোল্ডেন গ্রেইন"]}
      title="আমাদের অংশীদার"
      description="আমরা সেরা স্থানীয় সরবরাহকারীদের সাথে কাজ করি, যারা মান ও স্বাদের সাথে আপোষ করে না।"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "আপনারা কখন খোলা থাকেন?",          content: "আমাদের রেস্তোরাঁ প্রতিদিন সকাল ১০টা থেকে রাত ১১টা পর্যন্ত খোলা থাকে।"},
        {
          id: "faq-2",          title: "টেবিল রিজার্ভ করার কি কোনো ব্যবস্থা আছে?",          content: "হ্যাঁ, আপনি আমাদের ওয়েবসাইটে বা ফোন করে টেবিল রিজার্ভ করতে পারেন।"},
        {
          id: "faq-3",          title: "আপনারা কি হোম ডেলিভারি দেন?",          content: "আমরা নির্দিষ্ট এলাকার মধ্যে হোম ডেলিভারি সার্ভিস প্রদান করি। বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।"},
        {
          id: "faq-4",          title: "আপনাদের মেন্যুতে কি ভেগান অপশন আছে?",          content: "আমাদের মেন্যুতে কিছু ভেগান এবং নিরামিষ অপশন আছে। আপনার পছন্দের জন্য আমাদের স্টাফদের জিজ্ঞাসা করতে পারেন।"},
      ]}
      title="সাধারণ জিজ্ঞাসা"
      description="আমাদের রেস্তোরাঁ সম্পর্কে আপনার যেকোনো প্রশ্নের উত্তর খুঁজে নিন।"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact-info" data-section="contact-info">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "আমাদের ঠিকানা",          description: "নিউ ব্রিজ, কালিকাডোবা, গোবিন্দগঞ্জ, ৫৭৪০ (Unnamed Road)",          imageSrc: "http://img.b2bpic.net/free-photo/coffee-pins-map_23-2147635444.jpg",          imageAlt: "Location Icon"},
        {
          title: "কল করুন",          description: "০১৭১৭-৯৯৯১৮৯",          imageSrc: "http://img.b2bpic.net/free-photo/dgital-tablet-mobile-phone-near-stickers-social-media-icons_23-2147841405.jpg",          imageAlt: "Phone Icon"},
        {
          title: "ইমেইল করুন",          description: "randhan.shala99@gmail.com",          imageSrc: "http://img.b2bpic.net/free-photo/set-social-media-icon-illustration_53876-146266.jpg",          imageAlt: "Email Icon"},
        {
          title: "সার্ভিস সমূহের সুবিধা",          description: "ডাইন-ইন, ড্রাইভ-থ্রু, নো-কন্ট্যাক্ট ডেলিভারি",          imageSrc: "http://img.b2bpic.net/free-vector/hotel-icons-collection_23-2147498524.jpg",          imageAlt: "Service Icon"},
      ]}
      title="রেস্তোরাঁর বিস্তারিত ও যোগাযোগ"
      description="আমাদের সাথে যোগাযোগ করুন বা আমাদের অবস্থান সম্পর্কে জানুন।"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1d7aq5"
      logoAlt="Rondhon Shala Logo"
      logoText="রন্ধন শালা"
      columns={[
        {
          title: "মেন্যু",          items: [
            {
              label: "পিঁজ্জা",              href: "#menu"},
            {
              label: "ক্রাম্ব প্রন ফ্রাই",              href: "#menu"},
            {
              label: "স্যুপ",              href: "#menu"},
          ],
        },
        {
          title: "আমাদের সম্পর্কে",          items: [
            {
              label: "আমাদের গল্প",              href: "#about"},
            {
              label: "গ্রাহকদের প্রতিক্রিয়া",              href: "#testimonials"},
            {
              label: "প্রশ্নাবলী",              href: "#faq"},
          ],
        },
        {
          title: "যোগাযোগ",          items: [
            {
              label: "ঠিকানা",              href: "#contact-info"},
            {
              label: "ফোন",              href: "#contact-info"},
            {
              label: "ইমেইল",              href: "#contact-info"},
          ],
        },
      ]}
      copyrightText="© ২০২৬ রন্ধন শালা। সর্বস্বত্ব সংরক্ষিত।"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}