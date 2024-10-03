'use client'
import Image from "next/image";
import styles from "./page.module.css";
import LiveVideoPlayerWithPreRollAndDAI from "./LivevideoPlayer";

export default function Home() {

  const preRollAdUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=';
const liveStreamUrlWithDAIKey = 'https://dai.google.com/linear/hls/pb/event/c-rArva4ShKVIAkNfy6HUQ/stream/6834a69d-6896-496f-b860-fd6935adff23:SIN2/master.m3u8?dai_key=c-rArva4ShKVIAkNfy6HUQ';


  return (
    <div className={styles.page}>
    
      <LiveVideoPlayerWithPreRollAndDAI
        preRollAdUrl={preRollAdUrl}
        liveStreamUrlWithDAIKey={liveStreamUrlWithDAIKey}
      />
    </div>
  );
}
