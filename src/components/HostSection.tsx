import React from 'react';
import { PROPERTY_IMAGES, PROPERTY_INFO } from '../data/property';
import { Languages, Compass, Heart, Award } from 'lucide-react';

export const HostSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F4F0E8] border-t border-[#D8CDBB]/70">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Host Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-xs border border-[#D8CDBB] shadow-sm">
                <img
                  src={PROPERTY_IMAGES.hostPortrait}
                  alt="Lavinia Monica, Host at B&B Artemisia in Alghero"
                  className="w-full h-[440px] sm:h-[480px] object-cover filter contrast-[1.02]"
                />
              </div>

              {/* Verified Experience Badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#30372E] text-[#F4F0E8] p-4 shadow-md rounded-xs border border-[#D8CDBB]/40 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-3.5 h-3.5 text-[#D8CDBB]" />
                  <span className="text-[9px] uppercase tracking-[0.24em] font-medium text-[#D8CDBB]">
                    VERIFIED HOST
                  </span>
                </div>
                <p className="font-serif text-lg leading-tight">10 Years of Hospitality</p>
              </div>
            </div>
          </div>

          {/* Editorial Host Story Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#7C8068] mb-3">
              MEET LAVINIA
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#20201D] font-normal leading-[1.15] mb-6">
              Hospitality, <br />
              <span className="italic font-light text-[#30372E]">Personally.</span>
            </h2>

            <p className="font-sans text-base text-[#20201D]/85 font-light leading-relaxed mb-5">
              "To welcome a guest into Artemisia is to welcome them into the authentic rhythm of Sardinian life.
              For over ten years, I have had the joy of hosting travelers from across the globe, greeting each person
              at the door and helping them uncover the intimate secrets of our island."
            </p>

            <p className="font-sans text-sm text-[#20201D]/75 font-light leading-relaxed mb-8">
              Lavinia personally welcomes each traveler upon arrival. An enthusiast of outdoor sports, cooking,
              and the rich gastronomic traditions of both Sardinian and Catalan cuisine, she takes genuine pleasure
              in tailoring daily recommendations—from hidden rocky coves and scenic hiking trails to small family-run
              pizzerias and authentic local trattorie.
            </p>

            {/* Languages & Host Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#D8CDBB]">
              <div className="flex items-start gap-3">
                <Languages className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#20201D] font-semibold mb-1">
                    Spoken Languages
                  </h4>
                  <p className="text-xs text-[#20201D]/70 font-light">
                    {PROPERTY_INFO.contact.languages.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#7C8068] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#20201D] font-semibold mb-1">
                    Local Guidance
                  </h4>
                  <p className="text-xs text-[#20201D]/70 font-light">
                    Activities, excursions &amp; authentic culinary recommendations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-[#7C8068] font-light italic">
              <Heart className="w-3.5 h-3.5 text-[#A7664D]" />
              <span>Welcoming guests to Alghero with genuine warmth since 2014.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
