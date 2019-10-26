/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import classNames from 'classnames';
import styles from './css/pageHeader.scss';

const PageHeader = (props) => (

  <div className={classNames('afg-row', styles.headerRow)}>
    <div className="afg-col-xs-9 spectrum-Article">
      <h1 className={classNames('spectrum-Heading1--display', styles.pageHeading)}>{props.title}</h1>
    </div>
  </div>

)

export default PageHeader
