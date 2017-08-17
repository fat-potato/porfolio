import request from 'utils/request';

class AppServiceImpl {
  getJobs(data) {
    // const query = data || {};
    // const sort = (query.sort || []).join(',');
    // const page = data.page;
    // const size = data.size;
    // const search = (query.search || '');

    // let queryString = [];
    // if (sort && sort.length) {
    //   queryString.push(`sort=${sort}`);
    // }
    // if (page) {
    //   queryString.push(`page=${page}`);
    // }
    // if (size) {
    //   queryString.push(`size=${size}`);
    // }

    // if (search) {
    //   queryString.push(`search=${encodeURIComponent(search.trim())}`);
    // }

    // if (queryString.length) {
    //   queryString = queryString.join('&');
    // } else {
    //   queryString = '';
    // }

    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return request(url);
  }

  createJob(data) {
    return request('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      data: {
        name: data,
      },
    });
  }
}

const AppService = new AppServiceImpl();

export default AppService;
