import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

const Home = () => {
    return(
        <Fragment>
            <Helmet>
                <title>T.H.O.R.</title>
            </Helmet>
            <div class="masthead">
                <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div class="d-flex justify-content-center">
                        <div class="text-center">
                            <h1 class="mx-auto my-0 text-uppercase">T.H.O.R.</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5">The "Time Hours and Other Resources" converter.<br /> Convert client provided hours sheets to imports with ease.</h2>
                            <div class="d-flex justify-content-center">
                                <div class="text-center">
                                    <form method="POST" id="file-form" enctype="multipart/form-data">
                                        {/* {{ form.hidden_tag() }}
                        
                                        {% for field in form if field.widget.input_type != 'hidden' %}
                                        {{ field.label(class="upload=label text-white-50 mx-auto mt-2 mb-2") }}
                                        {{ field(placeholder=field.description) }}
                        
                                        {% for error in field.errors %}
                                            <span class="text-danger">{{ error }}</span><br>
                                        {% endfor %}
                                        {% endfor %}
                                        <div class="error-area">
                                            {% with messages = get_flashed_messages(with_categories=true) %}
                                                {% if messages %}
                                                    {% for category, message in messages %}
                                                    <div class="alert alert-{{category}} alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                        {{message}}
                                                    </div>
                                                    {% endfor %}
                                                {% endif %}
                                            {% endwith %}
                                        </div>
                                        <div>
                                            <button class="btn item-btn btn-primary">{{phrase}}</button>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Home;