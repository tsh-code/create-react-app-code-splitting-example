import React from 'react';
import styles from './style.module.scss';

export class LandingAboutComponent extends React.Component {

  render() {

    return (
      <section className={styles.landingabout}>
        <div className={styles.landingabout_content}>
          <h2 className={styles.landingabout_title}>
            Lorem ipsum dolor sit amet
          </h2>
          <div className={styles.landingabout_body}>
            <p className={styles.landingabout_paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa tellus, pretium et erat eget, accumsan maximus nibh. Pellentesque bibendum pretium ligula. Integer eget commodo ipsum, ac aliquet nisl. Fusce iaculis nulla lacus. Aliquam et neque et libero finibus pellentesque nec quis lacus. Integer elementum cursus est a dictum. Donec ornare, mi ut accumsan efficitur, turpis elit eleifend tortor, ac tincidunt nisi leo eget eros. Nunc suscipit convallis nisi. Quisque vitae arcu a ipsum rhoncus rutrum. Phasellus hendrerit metus nec ipsum lobortis consequat. In hac habitasse platea dictumst. Curabitur mattis, metus in accumsan rhoncus, mauris urna dapibus lorem, faucibus tristique orci neque et eros. Pellentesque dapibus augue ut enim vestibulum aliquet condimentum a metus. Curabitur ornare lorem sed metus porta aliquet in vitae elit. Vestibulum hendrerit iaculis nibh vitae vehicula.
            </p>
            <p className={styles.landingabout_paragraph}>
              Morbi pellentesque neque ut libero fringilla, vel blandit dui interdum. Phasellus tincidunt purus vitae sapien lacinia pretium. Duis posuere tristique dui, non aliquet dolor blandit non. Ut blandit pellentesque auctor. Nulla maximus maximus faucibus. Duis laoreet, mauris ac fermentum fringilla, eros lectus venenatis augue, at vestibulum nunc mi vel sapien. Morbi consectetur porttitor magna sed suscipit. Fusce at nisl a orci tempor condimentum quis a sapien. Vestibulum venenatis eros at volutpat imperdiet. Sed dictum ante luctus orci pretium consequat. Aliquam vel convallis dolor, vel finibus quam.
            </p>
            <p className={styles.landingabout_paragraph}>
              Quisque condimentum, sem quis bibendum mollis, elit nulla consectetur elit, id pharetra sapien magna ut turpis. Quisque finibus rutrum imperdiet. Aliquam sed viverra justo. Nulla rutrum purus quis scelerisque venenatis. Fusce tincidunt, turpis vitae commodo iaculis, ipsum ipsum consequat justo, id ullamcorper turpis tellus eu nisl. Nullam semper congue lorem, a laoreet elit dignissim sed. Donec consectetur consectetur elit, in euismod lectus tincidunt et. Phasellus mattis lorem ut placerat imperdiet. Morbi vehicula ac tortor ut pellentesque. Proin a efficitur sem. Sed sagittis nulla ac porta pulvinar.
            </p>
            <p className={styles.landingabout_paragraph}>
              Nunc mollis sapien justo, in mollis odio hendrerit in. Vivamus vulputate nisi ac blandit congue. Nunc vel justo magna. Suspendisse justo nisi, aliquet eget quam nec, viverra euismod nisl. Curabitur nec tempor odio, hendrerit vulputate diam. Vestibulum rhoncus, dolor et pretium pretium, ipsum odio aliquam urna, ac imperdiet ligula est eu nisl. Aliquam ullamcorper vehicula odio, et maximus justo feugiat vel. Praesent tristique, urna quis consectetur aliquet, justo nunc rhoncus ante, at eleifend dolor ante sit amet magna. Integer vel feugiat lorem, sed efficitur lectus.
            </p>
          </div>
        </div>
      </section>
    )
  }
}