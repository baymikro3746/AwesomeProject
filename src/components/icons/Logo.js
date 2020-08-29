import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgLogo(props) {
  return (
    <Svg width="24" height="24" fill="none" {...props}>
      <G clipPath="url(#logo_svg__clip0)" fill="#fff">
        <Path d="M15.192 14.457H0V0h47.536v14.457H32.344v37H15.192v-37zM51.457 0H71.06c20.582 0 30.629 10.046 30.629 25.238v.245c0 15.192-10.537 25.974-31.364 25.974H51.457V0zm17.152 14.947V36.51h2.94c7.842 0 12.987-3.185 12.987-10.781v-.246c0-7.35-5.145-10.781-12.986-10.781h-2.94v.245zM106.589 0h17.153v19.358L138.444 0h20.092l-17.887 22.298 18.132 29.159h-20.582L128.152 35.04l-4.41 5.39v11.027h-17.153V0zM4.41 65.669H1.226v-1.715h7.841v1.715h-2.94v8.086H4.41v-8.086zm7.842 4.165V64.2h1.715v5.635c0 1.716.98 2.696 2.45 2.696 1.47 0 2.45-.98 2.45-2.696V64.2h1.716v5.635c0 2.94-1.715 4.411-4.166 4.411-2.45-.245-4.165-1.715-4.165-4.41zm1.96-8.086h1.715v1.47h-1.715v-1.47zm2.94 0h1.716v1.47h-1.716v-1.47zm7.596 2.451h4.411c1.225 0 2.205.245 2.94.98.49.49.736 1.225.736 2.205 0 1.715-.98 2.695-2.206 2.94L33.325 74h-1.96l-2.451-3.43h-2.205V74h-1.716v-9.801h-.245zm4.166 4.9c1.225 0 1.96-.735 1.96-1.715 0-.98-.735-1.715-1.96-1.715h-2.45v3.185h2.45v.245zm7.351-4.9h1.715v4.9l4.656-4.9h2.205l-4.165 4.165L44.84 74h-2.205l-3.43-4.41-1.226 1.47V74h-1.715v-9.801zm17.642 0h3.676c3.185 0 5.145 2.205 5.145 4.9 0 2.696-2.205 4.901-5.145 4.901h-3.676v-9.801zm1.716 1.47v6.616h1.96c1.96 0 3.43-1.47 3.43-3.186 0-1.96-1.225-3.43-3.43-3.43h-1.96zm10.781-3.921h1.715v1.47h-1.715v-1.47zm0 2.45h1.715V74h-1.715v-9.801zm5.881.001H74v8.33h5.146V74h-6.861v-9.801zm15.927 0h1.715v4.9l4.656-4.9h2.205l-4.165 4.165L96.788 74h-2.205l-3.43-4.41-1.226 1.47V74h-1.715v-9.801zm11.271 5.635V64.2h1.716v5.635c0 1.716.98 2.696 2.45 2.696 1.47 0 2.45-.98 2.45-2.696V64.2h1.716v5.635c0 2.94-1.716 4.411-4.166 4.411-2.45-.245-4.166-1.715-4.166-4.41zm12.497-5.635h4.411c1.225 0 2.205.245 2.94.98.49.49.735 1.225.735 2.205 0 1.715-.98 2.695-2.205 2.94L120.556 74h-1.96l-2.45-3.43h-2.206V74h-1.715v-9.801h-.245zm4.166 4.9c1.225 0 1.96-.735 1.96-1.715 0-.98-.735-1.715-1.96-1.715h-2.451v3.185h2.451v.245zm7.351.735V64.2h1.715v5.635c0 1.716.98 2.696 2.45 2.696 1.471 0 2.451-.98 2.451-2.696V64.2h1.715v5.635c0 2.94-1.715 4.411-4.166 4.411-2.695-.245-4.165-1.715-4.165-4.41zm12.251-5.635h1.716l2.94 4.655 2.94-4.655h1.716V74h-1.716v-7.106l-3.185 4.656-2.94-4.656V74h-1.716v-9.801h.245zm13.477 5.635V64.2h1.715v5.635c0 1.716.981 2.696 2.451 2.696 1.47 0 2.45-.98 2.45-2.696V64.2h1.715v5.635c0 2.94-1.715 4.411-4.165 4.411-2.451-.245-4.166-1.715-4.166-4.41z" />
      </G>
      <Defs>
        <ClipPath id="logo_svg__clip0">
          <Path fill="#fff" d="M0 0h158.781v74H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgLogo;
