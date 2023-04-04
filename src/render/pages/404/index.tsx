import React from 'react';

// const playlist = [
//   {
//     id: 58,
//     title: 'Love Another Day',
//     extension: 'mp3',
//     artist: 'Deep-X',
//     album: 'Barrio',
//     year: 2018,
//     duration: 174.00163265306122,
//     awsId: 'b6feca50-a6e2-4350-866a-8e33a40106be',
//     createdAt: '2022-10-10T17:39:07.184Z',
//     updatedAt: '2022-10-14T19:44:45.224Z',
//     estado: 'ACTIVO'
//   },
//   {
//     id: 57,
//     title: 'Keep Your Head On The Ground',
//     extension: 'mp3',
//     artist: 'Deep-X',
//     album: 'Barrio',
//     year: 2018,
//     duration: 175.07265306122449,
//     awsId: 'b94175b3-8e9f-4032-ab0c-1e4460c7c265',
//     createdAt: '2022-10-10T17:39:04.205Z',
//     updatedAt: '2022-10-12T22:43:21.487Z',
//     estado: 'ACTIVO'
//   },
//   {
//     id: 56,
//     title: 'I Love You',
//     extension: 'mp3',
//     artist: 'Deep-X',
//     album: 'Barrio',
//     year: 2018,
//     duration: 136.9861224489796,
//     awsId: 'a21f574d-3bd2-4757-bcd6-3dbe912b7cff',
//     createdAt: '2022-10-10T17:38:58.870Z',
//     updatedAt: '2022-10-12T22:44:19.318Z',
//     estado: 'ACTIVO'
//   }
// ];

const NotFoundPage = () => {
  return (
    <>
      <div>NotFoundPage</div>
      {/* <audio src="" controls id="audio"></audio> */}
      {/* <button
        onClick={() => {
          const payload = new Set<string>();

          for (const song of playlist) {
            payload.add(song.awsId);
          }

          window.Main.DownloadFiles({ playlist: payload });
        }}
      >
        DOWNLOAD
      </button>
      <button
        onClick={async () => {
          const awsId = 'a21f574d-3bd2-4757-bcd6-3dbe912b7cff';
          const buffer = await window.Main.ReadFile(awsId);

          if (!buffer) return;

          const blob = new Blob([buffer]);
          const url = URL.createObjectURL(blob);

          const audio = new Audio(url);
          audio.play();
        }}
      >
        PLAY
      </button> */}
    </>
  );
};

export default NotFoundPage;
