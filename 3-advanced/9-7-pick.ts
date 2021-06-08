// 어떠한 정보들이 많은 타입이 있고 그중에서 몇가지만 뽑아서 사용할때

{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string):Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data'
    };
  }

  function getVideoMetadata(id: string) :VideoMetadata{
    return {
      id: 'ii',
      title: '제목'
    };
  }
}