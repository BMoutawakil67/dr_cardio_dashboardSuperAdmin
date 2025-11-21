<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Checkbox and Radio Addons</h5>
    </div>
    <div class="card-body">
      <b-form action="javascript:;">
        <div class="form-group row">
          <label class="col-form-label col-lg-2">Checkbox</label>
          <div class="col-lg-10 mb-3">
            <div class="input-group">
              <span class="input-group-text">
                <input type="checkbox" />
              </span>
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
        </div>
        <div class="form-group row mb-0">
          <label class="col-form-label col-lg-2">Radio</label>
          <div class="col-lg-10 mb-3">
            <div class="input-group">
              <span class="input-group-text">
                <input type="radio" />
              </span>
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title">Multiple Addons</h5>
    </div>
    <div class="card-body">
      <b-form action="javascript:;">
        <div class="form-group row">
          <label class="col-form-label col-lg-2">Radio and Text Addons</label>
          <div class="col-lg-10">
            <div class="input-group">
              <span class="input-group-text">
                <input type="checkbox" />
              </span>
              <span class="input-group-text">$</span>
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
        </div>
        <div class="form-group row mb-0">
          <label class="col-form-label col-lg-2">Two Addons</label>
          <div class="col-lg-10">
            <div class="input-group">
              <span class="input-group-text">$</span>
              <span class="input-group-text">0.00</span>
              <b-form-input type="text" class="form-control"></b-form-input>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>
