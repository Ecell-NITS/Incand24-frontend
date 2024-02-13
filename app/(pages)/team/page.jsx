"use client"

import React, { useState } from 'react'
import TeamCard from '@/app/components/TeamCard/TeamCard'
import styles from "./Team.module.scss"

import Navbar from '@/app/components/Navbar/Navbar'
import Footer from '@/app/components/Footer/Footer'


const page = () => {
  // const [isCore, setIsCore] = useState(true);
  // const [isTech, setIsTech] = useState(false);

  const [isCore, setIsCore] = useState(true)
  const [isTech, setIsTech] = useState(false)

  const handleClick1 = () => {
    setIsCore(true);
    setIsTech(false);
  };
  const handleClick2 = () => {
    setIsCore(false);
    setIsTech(true);
  };
  const teamData1 = [
    [
      {
        "id": 9,
        "name": "Jyotimoy Kashyap ",
        "rank": "Website Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676056137/Incand/Team%20Page/2nd%20and%203rd%20year/7c3f3d08-f66b-4bf2-87cc-b9969ce47152_drfrd7.jpg",
        "fb": "https://www.facebook.com/jyotimoy.kashyap.33",
        "linkedln": "https://www.linkedin.com/in/jyotimoykashyap",
        "git": "https://github.com/JyotimoyKashyap"
      },
      {
        "id": 8,
        "name": "Debojyoti Das ",
        "rank": "Website Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676056138/Incand/Team%20Page/2nd%20and%203rd%20year/6e829862-e520-4a4d-bc0e-4f6a63059719_iwultp.jpg",
        "fb": "https://www.facebook.com/debojyoti.das.52206",
        "linkedln": "https://www.linkedin.com/in/debojyotidas1915001/",
        "git": "https://github.com/Debojyoti1915001"
      },
      {
        "id": 10,
        "name": "Arkadeep Kashyap ",
        "rank": "Website Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676093434/Incand/4th%20year%20team%20page/IMG_20220520_154734_303_-_Arkadeep_Kashyap_lkwfyv.jpg",
        "fb": "https://www.facebook.com/arko.kashyap?mibextid=ZbWKwL",
        "linkedln": "https://www.linkedin.com/in/kashyaparka/",
        "git": "https://github.com/kashyaparka"
      },
      {
        "id": 9,
        "name": "Soumya Ranjan Mohapatro",
        "rank": "UI Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676093419/Incand/4th%20year%20team%20page/2_-_Copy_-_Soumya_Ranjan_Mohapatro_vlhrob.jpg",
        "linkedln": "https://www.linkedin.com/in/soumyarmohapatro/",
        "git": ""
      }
    ],
    [
      {
        "id": 1,
        "name": "Pratik Majumdar",
        "rank": "Website Co-Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055682/Incand/Team%20Page/2nd%20and%203rd%20year/Pratik_Majumdar_-_CSE_005_Pratik_Majumdar_jissds.jpg",
        "fb": "https://www.facebook.com/itspratikmaj",
        "linkedln": "https://www.linkedin.com/in/codadept",
        "git": "https://www.github.com/codadept"
      },
      {
        "id": 2,
        "name": "Saurav Pal",
        "rank": "Website Co-Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055682/Incand/Team%20Page/2nd%20and%203rd%20year/pfp_-_CSE_039_Saurav_Pal_cupanf.jpg",
        "fb": "https://www.facebook.com/resyfer.dev/",
        "linkedln": "https://www.linkedin.com/in/resyfer/",
        "git": "https://github.com/resyfer"
      },
      {
        "id": 3,
        "name": "Jyotishka Bhattacharjee ",
        "rank": "Website Co-Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055883/Incand/Team%20Page/2nd%20and%203rd%20year/copy_durga_puja_22_Sagarika_sofa_g4vtym.jpg",
        "fb": "https://www.facebook.com/profile.php?id=100005647038947",
        "linkedln": "https://www.linkedin.com/in/jyotishka-b-32995712b/",
        "git": "https://github.com/jyotishka747"
      },
      {
        "id": 4,
        "name": "Bhaskar Wary",
        "rank": "UI/UX Co-Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055683/Incand/Team%20Page/2nd%20and%203rd%20year/Wary_Bhaskar_Profile_-_CSE_067_BHASKAR_WARY_lok6ot.jpg",
        "fb": "https://www.facebook.com/bhaskar.wary.100/",
        "linkedln": "https://www.linkedin.com/in/bhaskar-wary/",
        "git": "https://www.behance.net/bhaskarwary"
      },
      {
        "id": 5,
        "name": "Vinayak Das",
        "rank": "Website Co-Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055690/Incand/Team%20Page/2nd%20and%203rd%20year/IMG_20230207_213202_-_EI88_Vinayak_Das_fsvkzf.jpg",
        "fb": "http://www.facebook.com/phenyloder",
        "linkedln": "http://www.linkedin.com/in/phenyloder",
        "git": "http://www.github.com/phenyloder"
      },
      {
        "id": 6,
        "name": "Biju Borah",
        "rank": "Website Co-Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055683/Incand/Team%20Page/2nd%20and%203rd%20year/IMG-20221208-WA0012_-_EE-A_056_Biju_Borah_afwt1y.jpg",
        "fb": "",
        "linkedln": "https://www.linkedin.com/in/biju-borah-1bb78620a",
        "git": "https://github.com/biju-borah"
      },
      {
        "id": 14,
        "name": "Diya Karmakar",
        "rank": "UI/UX Co-Head",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676183946/Incand/Team%20Page/2nd%20and%203rd%20year/7cp9lo_-_Diya_Karmakar_gcfzri.jpg",
        "fb": "https://www.facebook.com/diya.karmakar.37625",
        "linkedln": "https://in.linkedin.com/in/diya-karmakar",
        "git": "https://github.com/diyakarmakar779"
      }
    ],
    [
      {
        "id": 1,
        "name": "Aditya Kumar ",
        "rank": "Junior Developer",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676219292/Incand/Team%20Page/2nd%20and%203rd%20year/20220815_174631_001-removebg-preview_1_hphwlo.jpg",
        "fb": "https://www.facebook.com/profile.php?id=100071791456601",
        "linkedln": "https://www.linkedin.com/in/adityakr31",
        "git": "https://github.com/31adityakumar"
      },
      {
        "id": 2,
        "name": "Adhiraj Dutta",
        "rank": "Junior Developer",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055681/Incand/Team%20Page/2nd%20and%203rd%20year/1655697483876_-_ECE_183_Adhiraj_Dutta_vxlvww.jpg",
        "fb": "https://www.facebook.com/byte.head.12/",
        "linkedln": "https://linkedin.com/in/byt3h3ad",
        "git": "https://github.com/byt3h3ad"
      },
      {
        "id": 3,
        "name": "Masoom Sahu",
        "rank": "Junior Developer",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055690/Incand/Team%20Page/2nd%20and%203rd%20year/IMG20230107120545k_-_CE021_masoom_sahu_qakzlp.jpg",
        "fb": "https://www.facebook.com/profile.php?id=100065692891679",
        "linkedln": "http://linkedin.com/in/masoom-sahu-09a469230",
        "git": "https://github.com/smasoom"
      },
      {
        "id": 4,
        "name": "Rajdristant Ghose ",
        "rank": "UI/UX Designer",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055682/Incand/Team%20Page/2nd%20and%203rd%20year/IMG_20230102_160505_-_Rajdristant_Ghose_zagwhp.jpg",
        "fb": "https://www.facebook.com/profile.php?id=100076066695970&mibextid=ZbWKwL",
        "linkedln": "https://www.linkedin.com/in/rajdristant-ghose-286061231",
        "git": "https://github.com/Raj217"
      },
      {
        "id": 5,
        "name": "Rohan Jha",
        "rank": "Junior Developer",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055686/Incand/Team%20Page/2nd%20and%203rd%20year/Screenshot_2023-02-07_115343_-_ECE_056_Rohan_Jha_g5bj5y.png",
        "fb": "https://www.facebook.com/profile.php?id=100010061770737",
        "linkedln": "https://www.linkedin.com/in/rohan-jha-ab635322b/",
        "git": "https://github.com/Rohan-108"
      },
      {
        "id": 6,
        "name": "Bipangshu Saha",
        "rank": "Junior Developer ",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055685/Incand/Team%20Page/2nd%20and%203rd%20year/Bipangshu_Saha_-_67_Bipangshu_Saha_qrjxwb.png",
        "fb": "https://www.facebook.com/ronny.kumar.7186896",
        "linkedln": "http://linkedin.com/in/bipangshu-saha-2aab9b228/",
        "git": "https://github.com/BIPS8812"
      },
      {
        "id": 7,
        "name": "Hrishikesh Borah",
        "rank": "Junior Developer ",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676055683/Incand/Team%20Page/2nd%20and%203rd%20year/IMG_20221220_221219_-_21_Hrishikesh__Borah_lyqep7.jpg",
        "fb": "https://www.facebook.com/profile.php?id=100067302155229&mibextid=ZbWKwL",
        "linkedln": "https://www.linkedin.com/in/hrishikeshborah",
        "git": "https://github.com/HrishB16"
      },
      {
        "id": 13,
        "name": "Maharnav Deka",
        "rank": "UI/UX Designer",
        "image": "https://res.cloudinary.com/resyfer/image/upload/v1676182241/Incand/Team%20Page/2nd%20and%203rd%20year/268578183_101717982381396_1088801179447275072_n_3_-_ECE_B_176_Maharnav_Deka_hymntq.jpg",
        "fb": "https://www.facebook.com/profile.php?id=100076295825121",
        "linkedln": "https://in.linkedin.com/in/maharnav-deka-06742815a",
        "git": "https://github.com/mdekaa"
      }
    ]
  ]
    ;
  const teamData2 = [
    [
        {
          "id": 1,
          "name": "Nilotpal Roy",
          "rank": "Chief Coordinator",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275034/20221219_135901_1_-_Mech_071_NILOTPAL_ROY_nj6vna_bdjnbe.jpg",
          "fb": "https://www.facebook.com/nabanibesh.roy?mibextid=ZbWKwL",
          "linkedln": "",
          "git": ""
        }
      ],
      [
        {
          "id": 2,
          "name": "Anindya Sundar Saikia  ",
          "rank": "Convenor",
          "image": "https://res.cloudinary.com/dnvhl9pru/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676453791/Incand-Team/Anindya.jpg",
          "fb": "https://www.facebook.com/anindya.saikia.3?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/anindya-sundar-saikia-963877192/",
          "git": ""
        },
        {
          "id": 3,
          "name": "Hemdutt Mishra ",
          "rank": "Convenor",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275029/IMG_20221107_190132_-_Hem_Dutt_Mishra_pajsgs_mc2hkl.jpg",
          "fb": "https://www.facebook.com/hemduttmishra21?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/hemduttmishra21/",
          "git": ""
        }
      ],
      [
        {
          "id": 4,
          "name": "Milind Barman ",
          "rank": "Executive Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275027/milind-barman_-_Milind_Barman_gpzdhk_d6cybz.jpg",
          "fb": "https://www.facebook.com/milind.barman.7?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/milind-barman-729958166/",
          "git": ""
        },
        {
          "id": 5,
          "name": "Md. Arshad Ahmed",
          "rank": "Executive Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275030/IMG_20221024_210350796_2_gkhgef_egtrnc.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100037671608077",
          "linkedln": "https://www.linkedin.com/in/md-arshad-ahmed-2001",
          "git": ""
        },
        {
          "id": 6,
          "name": "Robin Paul",
          "rank": "Executive Head Indie Unplugged",
          "image": "https://res.cloudinary.com/resyfer/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676056311/Incand/Team%20Page/2nd%20and%203rd%20year/38d9bdbc-bfa7-48f0-b204-90315f636b49_vbvszb.jpg",
          "fb": "https://www.facebook.com/robin.paul.562117",
          "linkedln": "https://www.linkedin.com/in/robin-paul-820b2b217",
          "git": ""
        }
      ],
      [
        {
          "id": 7,
          "name": "Rajanya Kashyap Gogoi ",
          "rank": "Marketing Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275027/SAVE_20220518_222617_-_Rajanya_Kashyap_Gogoi_zgszz1_l7conc.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100007507729293&mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/rajanya-kashyap-gogoi/",
          "git": ""
        },
        {
          "id": 8,
          "name": "Saurav H Das ",
          "rank": "Marketing Head ",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275028/IMG_20221231_113410_-_Saurav_Das_kxmx0n_g4hfxi.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100008447206879&mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/saurav-h-das-19742b187/",
          "git": ""
        },
        {
          "id": 9,
          "name": "Mrinmoi Borah",
          "rank": "Marketing Head ",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275032/B2DDE2A0-D82B-4F75-AE2B-81CE712ECE97_-_Mrinmoi_Borah_cfzikq_zg2ocu.jpg",
          "fb": "https://www.facebook.com/mrinmoi.borah.9?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/mrinmoi-borah-3a1938153/",
          "git": ""
        }
      ],
      [
        {
          "id": 10,
          "name": "Sayantan Das",
          "rank": "PR Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275031/IMG-20230126-WA0005_-_Sayantan_Das_nztqml_rw69sz.jpg",
          "fb": "https://www.facebook.com/sayantan.das.3720?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/sayantan-das-0513a8174/",
          "git": ""
        },
        {
          "id": 11,
          "name": "Satyik Pritam Yogi  ",
          "rank": "PR Head ",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275031/IMG_20230127_212541_-_Satyik_pritam_Yogi-1_byfqkp_vdlzbp.jpg",
          "linkedln": "https://www.linkedin.com/in/satyik-pritam-yogi-a6a49019a/",
          "git": ""
        },
        {
          "id": 12,
          "name": "Afsana Yasmin ",
          "rank": "PR Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275028/IMG_20230119_141018_-_Afsana_Yasmin_qe84gw_vlzx4v.jpg",
          "fb": "https://www.facebook.com/afsanayasmin.37?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/afsanayasmin1502/",
          "git": ""
        }
      ],
      [
        {
          "id": 13,
          "name": "Jyotimoy Kashyap ",
          "rank": "Web Head",
          "image": "https://res.cloudinary.com/resyfer/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676056137/Incand/Team%20Page/2nd%20and%203rd%20year/7c3f3d08-f66b-4bf2-87cc-b9969ce47152_drfrd7.jpg",
          "fb": "https://www.facebook.com/jyotimoy.kashyap.33",
          "linkedln": "https://www.linkedin.com/in/jyotimoykashyap",
          "git": "https://github.com/JyotimoyKashyap"
        },
        {
          "id": 14,
          "name": "Debojyoti Das ",
          "rank": "Web Head",
          "image": "https://res.cloudinary.com/resyfer/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676056138/Incand/Team%20Page/2nd%20and%203rd%20year/6e829862-e520-4a4d-bc0e-4f6a63059719_iwultp.jpg",
          "fb": "https://www.facebook.com/debojyoti.das.52206",
          "linkedln": "https://www.linkedin.com/in/debojyotidas1915001/",
          "git": "https://github.com/Debojyoti1915001"
        },
        {
          "id": 15,
          "name": "Arkadeep Kashyap ",
          "rank": "Web Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275030/IMG_20220520_154734_303_-_Arkadeep_Kashyap_lkwfyv_ohu5ki.jpg",
          "fb": "https://www.facebook.com/arko.kashyap?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/kashyaparka/",
          "git": "https://github.com/kashyaparka"
        }
      ],
      [
        {
          "id": 16,
          "name": "Soumya Ranjan Mohapatro",
          "rank": "Design Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275033/2_-_Copy_-_Soumya_Ranjan_Mohapatro_vlhrob_jvx4rp.jpg",
          "linkedln": "https://www.linkedin.com/in/soumyarmohapatro/",
          "git": ""
        },
        {
          "id": 17,
          "name": "Mugdha Thakuria  ",
          "rank": "Design Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275028/IMG_20221230_191123_747_-_Mugdha_Thakuria-1_u2hmxn_vxo2km.jpg",
          "fb": "https://www.facebook.com/mugdha.thakuria?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/mugdha-thakuria-0578751b7/",
          "git": ""
        },
        {
          "id": 18,
          "name": "Nitish Mohanty  ",
          "rank": "Design Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275029/IMG_20230204_132052_-_Nitish_Mohanty_ydy0ue_hsb4ke.jpg",
          "fb": "https://www.facebook.com/nitish.mohanty4?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/nitishmohanty/",
          "git": ""
        }
      ],
      [
        {
          "id": 19,
          "name": "Subhradeep Gogoi  ",
          "rank": "Content Team Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275032/IMG-20221228-WA0070_-_Subhradeep_Gogoi_rt7bg5_lax9v3.jpg",
          "fb": "https://www.facebook.com/subhradeep.gogoi.58?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/subhradeep-gogoi-2678211ba/",
          "git": ""
        },
        {
          "id": 20,
          "name": "Prapti Kashyap",
          "rank": "Content Head",
          "image": "https://res.cloudinary.com/dtgwr2azk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676302366/Incand2023/IMG-20211016-WA0341_-_prapti_kashyap_wptdol_r61qck.jpg",
          "fb": "https://www.facebook.com/prapti.kashyap?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/prapti-kashyap-b206321a0/",
          "git": ""
        },
        {
          "id": 21,
          "name": "Santanu Baruah",
          "rank": "Sokratik Module & Content Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275027/Santa_-_Santanu_Baruah_wlwzal_qu7jph.jpg",
          "fb": "https://www.facebook.com/santanu.shino.someone?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/santanu-baruah-84a6321a0/",
          "git": ""
        }
      ],
      [
        {
          "id": 25,
          "name": "Ruchir Bhattacharyya",
          "rank": "Event Management Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275033/20230122_192300_2_-_006_RUCHIR_BHATTACHARYYA_wwfh7q_ddmgla.jpg",
          "fb": "https://www.facebook.com/ruchir.bhatta?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/ruchirbhattacharyya/",
          "git": ""
        },
        {
          "id": 26,
          "name": "Mondeep Prakash",
          "rank": "Event Management Head",
          "image": "https://res.cloudinary.com/dtgwr2azk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676302358/Incand2023/88645e21-057f-467f-badd-dc3549cc6f59_odfetd_k39kj4.jpg",
          "fb": "",
          "linkedln": "",
          "git": ""
        }
      ],
      [
        {
          "id": 27,
          "name": "Anas Ahamed SJ",
          "rank": "Logistics - Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275027/WhatsApp_Image_2023-02-09_at_12.36.01_PM_-_Anas_Ahamed_ywmqgq_korynt.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100006293747783&mibextid=ZbWKwL",
          "linkedln": "",
          "git": ""
        },
        {
          "id": 28,
          "name": "Arjun Das",
          "rank": "Logistics - Head",
          "image": "https://res.cloudinary.com/resyfer/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676211154/Incand/4th%20year%20team%20page/IMG-20230212-WA0042_w0wsvb.jpg",
          "fb": "https://www.facebook.com/anas.ahamed.5454?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/anas-ahamed-0b90a6202/",
          "git": ""
        },
        {
          "id": 45,
          "name": "Mahesh Raj Adduri",
          "rank": "Logistics - Head",
          "image": "https://res.cloudinary.com/dnvhl9pru/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676383930/Incand-Team/Mahesh%20Raj%20Adduri.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100006701832969&mibextid=ZbWKwL",
          "linkedln": "",
          "git": ""
        }
      ],
      [
        {
          "id": 29,
          "name": "Saurav Jyoti Deka",
          "rank": "Infra Head",
          "image": "https://res.cloudinary.com/dtgwr2azk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676302358/Incand2023/13a8682a-61df-4cd2-9b7d-c3cec3fe4273_o4ruzf_cpwdik.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100008548698079",
          "linkedln": "https://www.linkedin.com/in/saurabh-jyoti-deka-4575221b8/",
          "git": ""
        }
      ],
      [
        {
          "id": 30,
          "name": "Manash Protim Goswami",
          "rank": "Hospitality Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275032/1674801690921_-_Manash_Goswami_rwdrad_szxoga.jpg",
          "fb": "https://www.facebook.com/manashprotim.goswami.3?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/manash-goswami-2bbb76217/",
          "git": ""
        },
        {
          "id": 31,
          "name": " Chandraa Gogoi ",
          "rank": "Hospitality head",
          "image": "https://res.cloudinary.com/resyfer/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676093441/Incand/4th%20year%20team%20page/IMG_20221002_144727_869_-_ME_B_128_u9qat4.jpg",
          "fb": "https://www.facebook.com/chandraa.gogoi.5?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/chandraa-gogoi-37b6aa204/",
          "git": ""
        },
        {
          "id": 32,
          "name": "Rishiraj Kalita",
          "rank": "Hospitality Head",
          "image": "https://res.cloudinary.com/resyfer/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676035680/Incand/Team%20Page/Rishiraj_Kalita_ProfilePhoto_-_Rishiraj_Kalita_bntmnn.jpg",
          "fb": "https://www.facebook.com/rishirajkalita41?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/rishiraj-kalita-5946511a0/",
          "git": ""
        },
        {
          "id": 33,
          "name": "Tridip Borah",
          "rank": "Hospitality Head",
          "image": "https://res.cloudinary.com/dtgwr2azk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676302359/Incand2023/a84cfddb-3bf3-4393-8aea-231a23539431_wsrjfl_lpxe7c.jpg",
          "fb": "https://www.facebook.com/tridip.borah.56863?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/tridip-borah-2976a1213",
          "git": ""
        }
      ],
      [
        {
          "id": 34,
          "name": "Nilanjan Das",
          "rank": "Security Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275038/20221217_121024_1_hge4uq_sftd6y.jpg",
          "fb": "https://www.facebook.com/nilanjan.das.9250595?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/nilanjan--das",
          "git": ""
        },
        {
          "id": 35,
          "name": "Jajjalya Kashyap",
          "rank": "Security Head",
          "image": "https://res.cloudinary.com/resyfer/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676137572/Incand/4th%20year%20team%20page/IMG_20221105_225912_187_1_g3hwfo.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100006731528641&mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/jajjalya-kashyap-9a24a523b",
          "git": ""
        }
      ],
      [
        {
          "id": 36,
          "name": "Nishad Tasneem ",
          "rank": "Decoration Head ",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275031/IMG-20230203-WA0027_-_Diksha_Kakati_t8g9nr_vcge94.jpg",
          "fb": "https://www.facebook.com/nishad.tasnim.92?mibextid=ZbWKwL",
          "linkedln": "",
          "git": ""
        },
        {
          "id": 37,
          "name": "Debanga Choudhury ",
          "rank": "Decoration Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275032/IMG_20221031_150020_275_-_Debanga_Choudhury_oaylae_mrgzbe.jpg",
          "fb": "https://www.facebook.com/debanga.choudhury?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/debanga-choudhury-3b6b131b6/",
          "git": ""
        },
        {
          "id": 38,
          "name": "Diksha kakati ",
          "rank": "Decoration Head ",
          "image": "https://res.cloudinary.com/dtgwr2azk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676302365/Incand2023/IMG_20230203_220951_450_-_Diksha_Kakati_ugjplx_vnqro0.jpg",
          "fb": "https://www.facebook.com/diksha.kakatis?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/diksha-kakati-2239091bb/",
          "git": ""
        },
        {
          "id": 39,
          "name": "Rajkumar Patidar ",
          "rank": "Decoration Head ",
          "image": "https://res.cloudinary.com/dtgwr2azk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676302358/Incand2023/8910c295-2ffc-4adb-9e2c-18039d45c706_injwau_wu5r1h.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100008994990999&mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/rajkumar-patidar-8ba765217",
          "git": ""
        },
        {
          "id": 46,
          "name": "Navoneel Debnath ",
          "rank": "Decoration Head ",
          "image": "https://res.cloudinary.com/dnvhl9pru/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676383928/Incand-Team/Navoneel%20Debnath.jpg",
          "fb": "https://www.facebook.com/navoneel.debnath.1?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/navoneel-debnath-471a111ab",
          "git": ""
        }
      ],
      [
        {
          "id": 40,
          "name": "Jubaraj Kakati  ",
          "rank": "Module Head, Nirvana",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275027/IMG_20230203_201714_-_moiuing_thongbam_cc119q_efhvzm.jpg",
          "fb": "https://www.facebook.com/jubaraj.kakati.146?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/jubarajkakati/",
          "git": ""
        },
        {
          "id": 41,
          "name": "Himangan Sarma",
          "rank": "Sokratic Module Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275027/WhatsApp_Image_2023-02-03_at_6.30.18_PM_-_Himangan_Sarma_i79f9y_fgrvvz.jpg",
          "fb": "https://www.facebook.com/himangan.sarma?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/himangan-sarma-511115210/",
          "git": ""
        },
        {
          "id": 42,
          "name": "Abhinav Kumar Gupta  ",
          "rank": "Kavi Sammelan Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275038/20221025_174847_-_ABHINAV_KUMAR_GUPTA_vo6ep8_wuvzu6.jpg",
          "fb": "https://www.facebook.com/profile.php?id=100003660467689&mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/abhinav-gupta-8512bb239/",
          "git": ""
        }
      ],
      [
        {
          "id": 43,
          "name": "Darina Mahanta ",
          "rank": "Indie Unplugged Head",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275031/IMG-20220821-WA0023_-_Darina_Mahanta_rt1mhn_nx1y6m.jpg",
          "fb": "https://www.facebook.com/darina.mahanta?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/darina-mahanta/",
          "git": ""
        },
        {
          "id": 44,
          "name": "Joysankar Saikia ",
          "rank": "Indie Unplugged ",
          "image": "https://res.cloudinary.com/dvom3jgxk/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676275028/IMG_20230207_154442_-_Joysankar_Saikia_hmotft_nu1qoq.jpg",
          "fb": "https://www.facebook.com/joy.sanks?mibextid=ZbWKwL",
          "linkedln": "https://www.linkedin.com/in/joysankar-saikia-7688ba209/",
          "git": ""
        }
      ]
    ]
  ;
  const navlink = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Events",
      link: "events",
    },
    {
      name: "Sponsor",
      link: "sponsor",
    },
    {
      name: "Team",
      link: "team",
    },
  ];

  return (
    <>
      <Navbar navlink={navlink} defaultDark={false}/>
    <div className={styles.container}>
      <div className={styles.toggle}>
        <div className={styles.t1} onClick={handleClick1}><h2>Core</h2></div>
        <div className={styles.t2} onClick={handleClick2}><h2>Tech</h2></div>
      </div>
      {/* <div className={styles.bbtn}><h2>Core</h2></div> */}
      {isCore && teamData2.map((teamGroup, index) => (
        <div key={index} className={styles.card}>
          {teamGroup.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              rank={member.rank}
              image={member.image}
              fb={member.fb}
              linkedln={member.linkedln}
              git={member.git}
            />
          ))}
        </div>
        
      ))}
      {isTech && teamData1.map((teamGroup, index) => (
        <div key={index} className={styles.card}>
          {teamGroup.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              rank={member.rank}
              image={member.image}
              fb={member.fb}
              linkedln={member.linkedln}
              git={member.git}
            />
          ))}
        </div>
        
      ))}
    <Footer />
    </div>
    </>
  )
}

export default page