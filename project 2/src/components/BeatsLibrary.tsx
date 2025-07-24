import React from 'react';
import { Youtube as YoutubeIcon } from 'lucide-react';
import BeatCard from './BeatCard';

const LATEST_BEATS = [
    {
    title: 'Haduwak - NIKLO ',
    thumbnailUrl: 'https://i.postimg.cc/1RV0GtM4/CRAa-DWY3-He8-HD.jpg',
    youtubeUrl: 'https://youtu.be/CRAaDWY3He8?si=xqODrG1vMto9ct9o',
  },
  
  {
    title: 'Wisekari - Sandaruwan Jayasinghe',
    thumbnailUrl: 'https://img.youtube.com/vi/HaEI_B5MI_8/maxresdefault.jpg',
    youtubeUrl: 'https://youtu.be/HaEI_B5MI_8?si=ggQ4rA-l10CJrlJe',
  },
  {
    title: 'Horahin - Rose Alagiyawanna ft. Sandali Maheesha',
    thumbnailUrl: 'https://i.postimg.cc/fbZy2d1X/Gu-c76t50b-A-HD.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=qXHx7kqR9O0',
  },
  {
    title: 'Bogambara - A.K Dila',
    thumbnailUrl: 'https://i.postimg.cc/VN6vPwLL/8hj-W6-Ag-Nhd-Q-HD-2.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=Ry6F8vEQkUU',
  },
  {
    title: 'Hiri Poda Wassa - Sandaruwan Jayasinghe x Niklo',
    thumbnailUrl: 'https://i.postimg.cc/bvtXtVm9/y-RZxqth-ISJE-HD.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=YmZJW5UoGWs',
  },
  {
    title: 'Wanuwa - Yeszerd X NIKLO',
    thumbnailUrl: 'https://i.postimg.cc/sfYMSsx1/Yniv-DTk-Mc-E-HD.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=YmZJW5UoGWs',
  },
  {
    title: 'Sikuru Liyavi - Pubudu Gayashan',
    thumbnailUrl: 'https://i.postimg.cc/qqyy63Y7/G-1-GW20-9-w-HD-1.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=YmZJW5UoGWs',
  },
  {
    title: 'Pinsara Oya Hadata - Chamari Leema',
    thumbnailUrl: 'https://i.postimg.cc/VsbRcQdR/vp-Tcw4x-My-OM-HD.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=qqK4VCY_7pk',
  },
   {
    title: 'Sayam Ruwaththi (Rosa Kumari) - NIKLO',
    thumbnailUrl: 'https://i.postimg.cc/wMQ5bNkG/CUb-POK1-JWt4-HD.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=qqK4VCY_7pk',
  },{
    title: 'Nabara Pema - Dushmantha Miranda X NIKLO ',
    thumbnailUrl: 'https://i.postimg.cc/jSHt5Qh1/gg-Rag-Ufuig-A-HD.jpg',
    youtubeUrl: 'https://youtu.be/ggRagUfuigA?si=XjCpyzMQD51a8UBu',
  },
    {
    title: 'Amma - Sujan Fernando ',
    thumbnailUrl: 'https://i.postimg.cc/SRbLQdss/w-Tjt-Qupn-Z58-HD-2.jpg',
    youtubeUrl: 'https://youtu.be/wTjtQupnZ58?si=9EYUU0h_OdjYI157',
  },
  {
    title: 'Manika- AK Dila ',
    thumbnailUrl: 'https://i.postimg.cc/26krpRd8/NGGt6-ES9-P20-HD-2.jpg',
    youtubeUrl: 'https://youtu.be/NGGt6ES9P20?si=dVw_F2DLwo9elvok',
  },
  {
    title: 'Wahidata- Darshana Sujith ',
    thumbnailUrl: 'https://i.postimg.cc/TP7fXNtV/Lj-Rjqc4-Xv-I-HD.jpg',
    youtubeUrl: 'https://youtu.be/LjRjqc4Xv-I?si=q0WFiYlK-Wg-g_vx',
  },
  {
    title: 'Sohoyuru Pema - Sandaru Perera & Inuri Fernando ',
    thumbnailUrl: 'https://i.postimg.cc/4N50M7Lt/Flt-G7-YZ-hr-E-HD.jpg',
    youtubeUrl: 'https://youtu.be/FltG7YZ_hrE?si=ovxdWPc05DXsOLOy',
  },
  {
    title: 'Nimak Nathi - Darshana sujith',
    thumbnailUrl: 'https://i.postimg.cc/j56VS8X3/BOo8-O-0-If-Ng-HD.jpg',
    youtubeUrl: 'https://youtu.be/BOo8O_0IfNg?si=BcMcOG8cY8MHsfaI',
  },
  {
    title: 'Obe Aadare Nisa - Sandaruwan Jayasinghe',
    thumbnailUrl: 'https://i.postimg.cc/8P2bZ1DW/j-P0dk-NIf-ME-HD.jpg',
    youtubeUrl: 'https://youtu.be/-jP0dkNIfME?si=ABqxP8kcMuTyPIC0',
  },
  {
    title: 'Shungaravi - NIKLO ',
    thumbnailUrl: 'https://i.postimg.cc/yxCzsDZK/v-FZ676w4-Nm-I-HD.jpg',
    youtubeUrl: 'https://youtu.be/vFZ676w4NmI?si=jOL4EGakb9BXOW6Y',
  },
  {
    title: 'Vijithaya Adaraye - Pradeep Fernando',
    thumbnailUrl: 'https://i.postimg.cc/Y0KdhgRX/z-Icm0-Edwgh8-HD-1.jpg',
    youtubeUrl: 'https://youtu.be/zIcm0Edwgh8?si=7tyC6nsTSSXpjfAJ',
  },
  {
    title: 'Sitha Akase - Inali Rodrigo Ft. Nuwan Rodrigo ',
    thumbnailUrl: 'https://i.postimg.cc/MG1MzQcZ/Y2-Ja-E2-NBpnw-HD.jpg',
    youtubeUrl: 'https://youtu.be/Y2JaE2NBpnw?si=vOExBanPXd5N4ujc',
  },
  {
    title: 'Lan Wenna ( ලං වෙන්න ) - R MESS Feat. Yeszerd ',
    thumbnailUrl: 'https://i.postimg.cc/XqL1mqKQ/y-Wt-Dqjy-Orfw-HD.jpg',
    youtubeUrl: 'https://youtu.be/yWtDqjyOrfw?si=69D1_lTUjREWnt1d',
  },
  {
    title: 'Gauthama Budu Samidhe (ගෞතම බුදු සමිදේ) - Sandaruwan Jayasinghe Ft. Suranji Shamali ',
    thumbnailUrl: 'https://i.postimg.cc/mZPwGdLT/d-CG1f-W3a-Zw-I-HD-1.jpg',
    youtubeUrl: 'https://youtu.be/dCG1fW3aZwI?si=bIj7v9sTsQUTtDdD',
  },
   {
    title: 'Anduru Mandarame ( අදුරු මන්දාරමේ ) - Geemal Ariyarathne',
    thumbnailUrl: 'https://i.postimg.cc/PqBqvrw3/55hdz-E0-PN80-HD.jpg',
    youtubeUrl: 'https://youtu.be/55hdzE0PN80?si=6Es6iGH2k-DlBScN',
  },
  {
    title: 'Wassane Unmade ( වස්සානේ උන්මාදේ ) - Pramodhi',
    thumbnailUrl: 'https://i.postimg.cc/66VQTK5c/Baw-Wwz-Wz5-KQ-HD.jpg',
    youtubeUrl: 'https://youtu.be/BawWwzWz5KQ?si=0crc9Z5H-TB5x9GG',
  },
  {
    title: 'Seethala Wahena ( සීතල වෑහෙනා ) - Sandaruwan Jayasinghe ft. NIKLO',
    thumbnailUrl: 'https://i.postimg.cc/zBZJXts4/yi-Vkrv-I2o-PE-HD.jpg',
    youtubeUrl: 'https://youtu.be/yiVkrvI2oPE?si=g8Q4wit1u9BhFarT',
  },
  {
    title: 'Watarawuma (වටරවුම) - Sandaruwan Jayasinghe ft. NIKLO ',
    thumbnailUrl: 'https://i.postimg.cc/Df5Ktww9/c766l9r-YMrk-HD.jpg',
    youtubeUrl: 'https://youtu.be/c766l9rYMrk?si=edIM0mmL9Dx2tcLS',
  },
  {
    title: 'Nil Tharu Dho (නිල් තරු දෝ) - Theekshana Anuradha ',
    thumbnailUrl: 'https://i.postimg.cc/j5ZkkC4v/47nw-K9s65u-A-HD.jpg',
    youtubeUrl: 'https://youtu.be/47nwK9s65uA?si=Ux_k6wqyu7txNIsl',
  },
  {
    title: 'Numbe Sitha Langa (නුඹේ සිත ළඟ) - Sandaruwan Jayasinghe',
    thumbnailUrl: 'https://i.postimg.cc/Vv0BBNGJ/DJRk-NWKt-Nv4-HD.jpg',
    youtubeUrl: 'https://youtu.be/DJRkNWKtNv4?si=oEiani55a1sVkvK-',
  },
  {
    title: 'Sandawathiya (සඳවතිය) - Sandaruwan Jayasinghe ',
    thumbnailUrl: 'https://i.postimg.cc/mDt6JBps/w-NNd-Wy-Pm6-Kg-HD.jpg',
    youtubeUrl: 'https://youtu.be/wNNdWyPm6Kg?si=zYnFfT__H6fTMIUL',
  },
  {
    title: 'Numbage Wela (නුඹගේ වෙලා) - Raween Kanishka ft. Sandaruwan Jayasinghe',
    thumbnailUrl: 'https://i.postimg.cc/T1vq06ZQ/Mz-JFHdp-Yz0-Q-HD.jpg',
    youtubeUrl: 'https://youtu.be/MzJFHdpYz0Q?si=eNbLtInxQhok2RAT',
  },
   {
    title: 'Ashokamala (අශෝකමාලා) - Sandaruwan Jayasinghe ft. NIKLO  ',
    thumbnailUrl: 'https://i.postimg.cc/GmtYkt4d/c-Hgk-Q422-LMc-HD.jpg',
    youtubeUrl: 'https://youtu.be/cHgkQ422LMc?si=yGuDBvNobVTwYzWO',
  },
  {
    title: 'Oba Yannama Yanawanam (ඔබ යන්නම යනවානම්) - Dayan Witharana ',
    thumbnailUrl: 'https://i.postimg.cc/KvNw1qMC/y-Jx4-Zvd-SOKM-HD.jpg',
    youtubeUrl: 'https://youtu.be/yJx4ZvdSOKM?si=Ywhvlf5eZ4Bpl4HW',
  },
  {
    title: 'Oba Mage Wela (ඔබ මගේ වෙලා) -Suranji Shyamali  ',
    thumbnailUrl: 'https://i.postimg.cc/4NNwSJYF/Jt8-JJLCvu-WQ-HD.jpg',
    youtubeUrl: 'https://youtu.be/Jt8JJLCvuWQ?si=2vPcALUYpsgpkKVr',
  },
   {
    title: 'Numba Irak Wage ( නුඹ ඉරක් වගේ ) - Nipuni Nayanathara  ',
    thumbnailUrl: 'https://i.postimg.cc/Xvz2SphY/L4-LPTk-UXY-Y-HD.jpg',
    youtubeUrl: 'https://youtu.be/L4LPTkUXY-Y?si=Xw1smAwD3KJfka7J',
  },
  {
    title: 'Ma Thanikarada (මා තනිකරදා)  - Sandaruwan Jayasinghe  ',
    thumbnailUrl: 'https://i.postimg.cc/SRcR8xP7/c-Cp506-AZCp-A-HD.jpg',
    youtubeUrl: 'https://youtu.be/cCp506AZCpA?si=OdsD-wvXYadH5AMq',
  },
  {
    title: ' Awurudu Kale Pura (හිනැහෙමු අවුරුදු කාලේ පුරා) - Sandaruwan Jayasinghe ft Raween, Dilki, Sulochana  ',
    thumbnailUrl: 'https://i.postimg.cc/CxDxZ1Wv/s-GGk-uw-H8k-E-HD.jpg',
    youtubeUrl: 'https://youtu.be/sGGk-uwH8kE?si=_G_XN_U4YnrAM-Sh',
  },
];

export default function BeatsLibrary() {
  return (
    <section id="beats" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest Releases
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out our latest music productions and collaborations with top
            artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_BEATS.map((beat, index) => (
            <BeatCard
              key={`${beat.title}-${index}`}
              title={beat.title}
              genre={beat.genre}
              mood={beat.mood}
              thumbnailUrl={beat.thumbnailUrl}
              youtubeUrl={beat.youtubeUrl}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://youtube.com/@audiozonemusic8334"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            <YoutubeIcon size={20} />
            <span>Subscribe to Our Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
}