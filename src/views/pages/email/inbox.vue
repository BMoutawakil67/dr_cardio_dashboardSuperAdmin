<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="compose" />
      <!-- /Page Header -->
      <div class="row">
        <email-sidebar></email-sidebar>
        <div class="col-xl-8">
          <div class="card chat-box mb-2">
            <div class="chat-search-group">
              <div class="chat-user-group mb-0 d-flex align-items-center">
                <div class="top-check me-3">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" />
                  </div>
                </div>
                <div class="top-inbox-blk comman-flex me-3">
                  <a href="javascript:;" data-bs-toggle="dropdown" aria-expanded="false" class="">
                    <i class="feather-more-vertical"></i>
                  </a>
                  <div class="dropdown-menu" style="">
                    <a class="dropdown-item" href="javascript:;"> Reply</a>
                    <a class="dropdown-item" href="javascript:;"> Forward</a>
                    <a class="dropdown-item" href="javascript:;"> Archived</a>
                    <a class="dropdown-item" href="javascript:;"> Mark as Read</a>
                    <a class="dropdown-item" href="javascript:;"> Mark as Unread</a>
                    <a class="dropdown-item" href="javascript:;"> Delete</a>
                  </div>
                </div>
                <div class="top-liv-search top-chat-search top-action-search">
                  <form>
                    <div class="chat-search mb-0">
                      <div class="input-block me-2 mb-0">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search here"
                        />
                        <a class="btn"
                          ><img src="@/assets/img/icons/search-normal.svg" alt=""
                        /></a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="top-action-right">
                <ul class="nav">
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/refresh-icon.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/tag-icon-04.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/inbox.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/folder-icon-05.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/trash.svg" alt="img"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="email-content">
            <div class="table-responsive">
              <table class="table table-inbox table-hover">
                <tbody>
                  <tr class="unread clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><i class="fas fa-star starred"></i
                      ></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-03.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>
                            Bernardo James <span class="email-market">Marketting</span>
                          </h4>
                          <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">
                      <img
                        src="@/assets/img/icons/clip.svg"
                        class="me-2"
                        alt="img"
                      />13:14
                    </td>
                  </tr>
                  <tr class="unread clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><img src="@/assets/img/icons/star-empty.svg" alt="img"
                      /></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-04.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>Galaviz Lalema <span class="email-bills">Bills</span></h4>
                          <p>
                            Fwd: quis nostrud exercitation ullamco laboris nisi ut aliquip
                            voluptate velit esse cillum.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">8:42</td>
                  </tr>
                  <tr class="clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><img src="@/assets/img/icons/star-empty.svg" alt="img"
                      /></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-05.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>Bernardo James <span class="email-work">Work</span></h4>
                          <p>
                            Fwd: tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">
                      <img
                        src="@/assets/img/icons/clip.svg"
                        class="me-2"
                        alt="img"
                      />13:14
                    </td>
                  </tr>
                  <tr class="unread clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><i class="fas fa-star starred"></i
                      ></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-06.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>Bernardo James <span class="email-office">Office</span></h4>
                          <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">18 Sep</td>
                  </tr>
                  <tr class="clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><i class="fas fa-star starred"></i
                      ></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-07.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>
                            Bernardo James <span class="email-market">Marketting</span>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">
                      <img
                        src="@/assets/img/icons/clip.svg"
                        class="me-2"
                        alt="img"
                      />13:14
                    </td>
                  </tr>
                  <tr class="clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><img src="@/assets/img/icons/star-empty.svg" alt="img"
                      /></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-04.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>Galaviz Lalema <span class="email-bills">Bills</span></h4>
                          <p>
                            Fwd: quis nostrud exercitation ullamco laboris nisi ut aliquip
                            voluptate velit esse cillum.
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">1 Aug</td>
                  </tr>
                  <tr class="unread clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><img src="@/assets/img/icons/star-empty.svg" alt="img"
                      /></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-05.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>Bernardo James <span class="email-work">Work</span></h4>
                          <p>
                            Fwd: tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">
                      <img
                        src="@/assets/img/icons/clip.svg"
                        class="me-2"
                        alt="img"
                      />13:14
                    </td>
                  </tr>
                  <tr class="clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><i class="fas fa-star starred"></i
                      ></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-06.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>
                            Bernardo James <span class="email-market">Marketting</span>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">
                      <img
                        src="@/assets/img/icons/clip.svg"
                        class="me-2"
                        alt="img"
                      />13:14
                    </td>
                  </tr>
                  <tr class="unread clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><img src="@/assets/img/icons/star-empty.svg" alt="img"
                      /></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-04.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>Bernardo James <span class="email-work">Work</span></h4>
                          <p>
                            Fwd: tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">
                      <img
                        src="@/assets/img/icons/clip.svg"
                        class="me-2"
                        alt="img"
                      />13:14
                    </td>
                  </tr>
                  <tr class="clickable-row" data-href="mail-view">
                    <td>
                      <div class="top-check">
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="mail-important"
                        ><i class="fas fa-star starred"></i
                      ></span>
                    </td>
                    <td class="name">
                      <div class="email-img-blk">
                        <div class="email-img">
                          <img src="@/assets/img/profiles/avatar-02.jpg" alt="img" />
                        </div>
                        <div class="send-user">
                          <h4>Bernardo James <span class="email-office">Office</span></h4>
                          <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                          </p>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td class="mail-date">Sep 12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "App",
      text: "Inbox",
    };
  },
};
</script>
