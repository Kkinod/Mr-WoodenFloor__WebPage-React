import styled from 'styled-components/macro';

export const Header = styled.header`
    position: relative;
    height: 100vh;
`;

export const BgVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    overflow: hidden;
`;

export const BgVideoContent = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

