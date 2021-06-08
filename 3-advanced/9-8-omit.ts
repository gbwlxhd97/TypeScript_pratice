// 오밋은 pick과 반대로 제외하고 리턴,사용 가능
{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo2(id: string):Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data'
    };
  }

  function getVideoMetadata2(id: string) :VideoMetadata{
    return {
      id: 'ii',
      title: '제목'
    };
  }
}