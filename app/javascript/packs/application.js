import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import 'jquery'
import('../src/plugins')

import '../css/site.scss'

Rails.start()
Turbolinks.start()
ActiveStorage.start()
