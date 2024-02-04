import Image from "next/image";
export default function Main() {
  return (
    <main>
      <div className="main-info">
      
        <div className="card-container">
          <Image src="/65bf44e94320d.jpg" alt="Logo" width={200} height={100} />
          <h3>
            Srechko Katanes: “Osiyo Kubogida ko'rsatgan natijamizdan qoniqish
            hosil qildim”
          </h3>
          <h6>BUGUN, 13:03</h6>
          <p>
            O'zbekiston terma jamoasi bosh murabbiyi Qatarga qarshi o'yindan
            so'ng matbuot anjumanida ishtirok etdi
          </p>
        </div>
        <div className="card-container">
          <Image src="/obhavo.jpg" alt="Logo" width={200} height={100} />
          <h3>
            O'zbekistonda 5-fevral kuni qanday ob-havo kutilayotgani e'lon
            qilindi
          </h3>
          <h6>BUGUN, 12:49</h6>
          <p>Prognozlarga ko'ra, dushanba kuni yog'ingarchiliksiz o'tadi</p>
        </div>
        <div className="card-container">
          <Image src="/qirg'iz.jpg" alt="Logo" width={200} height={100} />{" "}
          <h3>
            Qirg'iziston prezidenti samolyotida to'rt nafar bemor Turkiyaga
            davolanishga jo‘natildi
          </h3>
          <h6>BUGUN, 11:59</h6>
          <p>
            Bemorlarga oila a'zolari va ikki nafar shifokor hamrohlik qiladi
          </p>
        </div>
        <div className="card-container">
          <Image src="/boks.jpg" alt="Logo" width={200} height={100} />{" "}
          <h3>
            O'zbekistonlik bokschilar Ispaniyada o'tgan xalqaro musobaqada 6 ta
            medalni qo‘lga kiritdi
          </h3>
          <h6>BUGUN, 11:45</h6>
          <p>
            O'zbekiston terma jamoasi 4 ta oltin hamda 2 ta bronza medaliga ega
            chiqdi
          </p>
        </div>
        <div className="card-container">
          <Image src="/elchi.jpg" alt="Logo" width={200} height={100} />{" "}
          <h3>O'zbekistonning Ummondagi yangi elchisi tayinlandi</h3>
          <h6>BUGUN, 11:10</h6>
          <p>
            Ushbu lavozimni O'zbekistonning Yekaterinburg shahridagi Bosh
            konsulligini boshqargan Abdusalom Xatamov egalladi
          </p>
        </div>
        <div className="card-container">
          <Image src="/namangan.jpg" alt="Logo" width={200} height={100} />
          <h3>
            Namangandagi ayollar forumida muvaffaqiyatga erishgan 5 nafar
            opa-singil spikerlik qildi (foto)
          </h3>
          <h6>BUGUN, 10:50</h6>
          <p>
            500 nafardan ziyod xotin-qiz qatnashgan tadbirda spikerlar
            muvaffaqiyat sirlari va tadbirkorlik ko'nikmalari bilan o'rtoqlashdi
          </p>
        </div>
        <div className="card-container">
          <Image src="/emm.jpg" alt="Logo" width={200} height={100} />
          <h3>
            Tayson Fyuri va Oleksandr Usik o'rtasidagi mutlaq chempionlik
            jangining yangi sanasi ma'lum bo'ldi
          </h3>
          <h6>BUGUN, 10:42</h6>
          <p>
            Shuningdek, bokschilar ushbu jangdan bosh tortsa, 10 million dollar
            jarimaga tortilishi belgilandi{" "}
          </p>
        </div>
        <div className="card-container">
          <Image src="/bozor.jpg" alt="Logo" width={200} height={100} />
          <h3>
            “Xalqning farmatsevtlarga, o'zining farm bozoriga ishonchi yo'q edi,
            lekin bori ham yo'qoldi” — jurnalist
          </h3>
          <h6>BUGUN, 10:15</h6>
          <p>
            Jurnalist davlatning yod bilan bog'liq katta loyihasi ham o'zini
            oqlamaganini eslatdi va bu voqea aybdorlari bilan bog'liq holat
            hamon ochiqlanmaganin...{" "}
          </p>
        </div>
      </div>

      <div className="sticky-info">
        <div className="sticky-cards-wrapper">
          <div className="sticky-container">
          <Image
              src="/65bf44e94320d.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
            <div className="sticky-cards-info">
              <h3>
                Srechko Katanes: “Osiyo Kubogida ko'rsatgan natijamizdan
                qoniqish hosil qildim”
              </h3>
              <h6>BUGUN, 13:03</h6>
            </div>
           
          </div>
          <div className="sticky-container">
          <Image src="/obhavo.jpg" alt="Logo" width={100} height={100} />

            <div className="sticky-cards-info">
              <h3>
                O'zbekistonda 5-fevral kuni qanday ob-havo kutilayotgani e'lon
                qilindi
              </h3>
              <h6>BUGUN, 12:49</h6>
            </div>
          </div>
          <div className="sticky-container">
          <Image src="/qirg'iz.jpg" alt="Logo" width={100} height={100} />{" "}

            <div className="sticky-cards-info">
              <h3>
                Qirg'iziston prezidenti samolyotida to'rt nafar bemor Turkiyaga
                davolanishga jo'natildi
              </h3>
              <h6>BUGUN, 11:59</h6>
            </div>
          </div>
          <div className="sticky-container">
          <Image src="/boks.jpg" alt="Logo" width={100} height={100} />{" "}

            <div className="sticky-cards-info">
              <h3>
                O'zbekistonlik bokschilar Ispaniyada o'tgan xalqaro musobaqada 6
                ta medalni qo'lga kiritdi
              </h3>
              <h6>BUGUN, 11:45</h6>
            </div>
          </div>
          <div className="sticky-container">
          <Image src="/elchi.jpg" alt="Logo" width={100} height={100} />{" "}

            <div className="sticky-cards-info">
              <h3>O'zbekistonning Ummondagi yangi elchisi tayinlandi</h3>
              <h6>BUGUN, 11:10</h6>
            </div>
          </div>
          <div className="sticky-container">
          <Image src="/namangan.jpg" alt="Logo" width={100} height={100} />

            <div className="sticky-cards-info">
              <h3>
                Namangandagi ayollar forumida muvaffaqiyatga erishgan 5 nafar
                opa-singil spikerlik qildi (foto)
              </h3>
              <h6>BUGUN, 10:50</h6>
            </div>
          </div>
          <div className="sticky-container">
          <Image src="/emm.jpg" alt="Logo" width={100} height={100} />

            <div className="sticky-cards-info">
              <h3>
                Tayson Fyuri va Oleksandr Usik o'rtasidagi mutlaq chempionlik
                jangining yangi sanasi ma'lum bo'ldi
              </h3>
              <h6>BUGUN, 10:42</h6>
            </div>
          </div>
          <div className="sticky-container">
          <Image src="/bozor.jpg" alt="Logo" width={100} height={100} />

            <div className="sticky-cards-info">
              <h3>
                “Xalqning farmatsevtlarga, o'zining farm bozoriga ishonchi yo'q
                edi, lekin bori ham yo'qoldi” — jurnalist
              </h3>
              <h6>BUGUN, 10:15</h6>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Tavsiya etamiz</h2>
          <hr />
        </div>
        <div className="sticky-cards-wrapper-footer">
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>
                Srechko Katanes: “Osiyo Kubogida ko'rsatgan natijamizdan
                qoniqish hosil qildim”
              </h3>
              <h6>BUGUN, 13:03</h6>
            </div>
            <Image
              src="/65bf44e94320d.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>
                O'zbekistonda 5-fevral kuni qanday ob-havo kutilayotgani e'lon
                qilindi
              </h3>
              <h6>BUGUN, 12:49</h6>
            </div>
            <Image src="/obhavo.jpg" alt="Logo" width={100} height={100} />
          </div>
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>
                Qirg'iziston prezidenti samolyotida to'rt nafar bemor Turkiyaga
                davolanishga jo'natildi
              </h3>
              <h6>BUGUN, 11:59</h6>
            </div>
            <Image src="/qirg'iz.jpg" alt="Logo" width={100} height={100} />{" "}
          </div>
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>
                O'zbekistonlik bokschilar Ispaniyada o'tgan xalqaro musobaqada 6
                ta medalni qo'lga kiritdi
              </h3>
              <h6>BUGUN, 11:45</h6>
            </div>
            <Image src="/boks.jpg" alt="Logo" width={100} height={100} />{" "}
          </div>
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>O'zbekistonning Ummondagi yangi elchisi tayinlandi</h3>
              <h6>BUGUN, 11:10</h6>
            </div>
            <Image src="/elchi.jpg" alt="Logo" width={100} height={100} />{" "}
          </div>
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>
                Namangandagi ayollar forumida muvaffaqiyatga erishgan 5 nafar
                opa-singil spikerlik qildi (foto)
              </h3>
              <h6>BUGUN, 10:50</h6>
            </div>
            <Image src="/namangan.jpg" alt="Logo" width={100} height={100} />
          </div>
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>
                Tayson Fyuri va Oleksandr Usik o'rtasidagi mutlaq chempionlik
                jangining yangi sanasi ma'lum bo'ldi
              </h3>
              <h6>BUGUN, 10:42</h6>
            </div>
            <Image src="/emm.jpg" alt="Logo" width={100} height={100} />
          </div>
          <div className="sticky-container">
            <div className="sticky-cards-info">
              <h3>
                “Xalqning farmatsevtlarga, o'zining farm bozoriga ishonchi yo'q
                edi, lekin bori ham yo'qoldi” — jurnalist
              </h3>
              <h6>BUGUN, 10:15</h6>
            </div>
            <Image src="/bozor.jpg" alt="Logo" width={100} height={100} />
          </div>
        </div>
 
      </div>
    </main>
  );
}
